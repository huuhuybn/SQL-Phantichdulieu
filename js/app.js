const STORAGE_KEY = 'codegym_da_progress';

// State
let state = {
    completedLessons: [],
    currentLessonId: null,
    totalLessons: 0
};

// Flattened list of lessons for easy navigation
let flatLessons = [];

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    prepareData();
    renderSidebar();
    
    // Select first lesson if none selected, or restore last session
    if (flatLessons.length > 0) {
        // Find the first uncompleted lesson, or the last one played? 
        // For simple UX, let's just pick the first module's first lesson if it's brand new.
        const startId = flatLessons[0].id; 
        loadLesson(state.currentLessonId || startId); 
    }

    setupEventListeners();
    updateProgressUI();
});

function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        state.completedLessons = parsed.completedLessons || [];
        state.currentLessonId = parsed.currentLessonId || null;
    }
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completedLessons: state.completedLessons,
        currentLessonId: state.currentLessonId
    }));
    updateProgressUI();
}

function prepareData() {
    flatLessons = [];
    courseData.modules.forEach(mod => {
        mod.sessions.forEach(sess => {
            flatLessons.push({
                ...sess,
                moduleId: mod.id,
                moduleTitle: mod.title
            });
        });
    });
    state.totalLessons = flatLessons.length;
}

function renderSidebar() {
    const container = document.getElementById('course-tree');
    container.innerHTML = '';

    courseData.modules.forEach(mod => {
        // Module Header
        const modDiv = document.createElement('div');
        modDiv.className = 'module-item';
        
        const header = document.createElement('div');
        header.className = 'module-header';
        header.innerHTML = `
            <span>${mod.title}</span>
            <i class="fa-solid fa-chevron-down"></i>
        `;
        
        // List of Sessions
        const list = document.createElement('div');
        list.className = 'session-list open'; // Default open for now
        
        mod.sessions.forEach(sess => {
            const item = document.createElement('div');
            item.className = 'session-item';
            item.dataset.id = sess.id;
            item.id = `sidebar-sess-${sess.id}`;
            item.onclick = () => loadLesson(sess.id);
            
            const isCompleted = state.completedLessons.includes(sess.id);
            const iconClass = isCompleted ? 'fa-solid fa-check-circle' : 'fa-regular fa-circle';
            
            item.innerHTML = `
                <i class="${iconClass}"></i>
                <span>${sess.title}</span>
            `;
            
            if (isCompleted) item.classList.add('completed');
            
            list.appendChild(item);
        });
        
        // Toggle Logic
        header.onclick = () => {
            list.classList.toggle('open');
            const icon = header.querySelector('i');
            if(list.classList.contains('open')) {
                icon.className = 'fa-solid fa-chevron-down';
            } else {
                icon.className = 'fa-solid fa-chevron-right';
            }
        };

        modDiv.appendChild(header);
        modDiv.appendChild(list);
        container.appendChild(modDiv);
    });
}

function loadLesson(id) {
    const lesson = flatLessons.find(l => l.id === id);
    if (!lesson) return;

    state.currentLessonId = id;
    saveProgress(); // Save current position

    // Update UI Content
    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('course-title').innerText = lesson.moduleTitle; // Update header info
    
    // Default open theory tab
    switchTab('theory');
    document.querySelector('#tab-theory').innerHTML = lesson.content || '<p>Nội dung đang cập nhật...</p>';
    document.querySelector('#tab-exercise').innerHTML = lesson.exercises || '<p>Chưa có bài tập cho buổi này.</p>';

    // Update Sidebar Active State
    document.querySelectorAll('.session-item').forEach(el => el.classList.remove('active'));
    const activeItem = document.getElementById(`sidebar-sess-${id}`);
    if (activeItem) activeItem.classList.add('active');

    // Update "Complete" Button
    updateCompleteButton(id);

    // Navigation Buttons
    updateNavButtons(id);
    
    // Log for debug
    console.log("Loaded lesson:", lesson.title);
}

function updateCompleteButton(id) {
    const btn = document.getElementById('btn-complete');
    const isCompleted = state.completedLessons.includes(id);
    
    if (isCompleted) {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Đã hoàn thành';
        btn.classList.add('completed');
    } else {
        btn.innerHTML = '<i class="fa-regular fa-circle-check"></i> Đánh dấu hoàn thành';
        btn.classList.remove('completed');
    }
}

function toggleComplete() {
    if (!state.currentLessonId) return;
    
    const idx = state.completedLessons.indexOf(state.currentLessonId);
    if (idx === -1) {
        state.completedLessons.push(state.currentLessonId);
    } else {
        state.completedLessons.splice(idx, 1);
    }
    
    saveProgress();
    updateCompleteButton(state.currentLessonId);
    renderSidebar(); // Re-render to update checkmarks
    // Re-active the current one because renderSidebar destroys DOM
    const activeItem = document.getElementById(`sidebar-sess-${state.currentLessonId}`);
    if (activeItem) activeItem.classList.add('active');
}

function updateProgressUI() {
    const total = state.totalLessons;
    const completed = state.completedLessons.length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    document.getElementById('progress-text').innerText = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateNavButtons(id) {
    const index = flatLessons.findIndex(l => l.id === id);
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= flatLessons.length - 1;
    
    prevBtn.onclick = () => {
        if (index > 0) loadLesson(flatLessons[index - 1].id);
    };
    
    nextBtn.onclick = () => {
        if (index < flatLessons.length - 1) loadLesson(flatLessons[index + 1].id);
    };
}

function switchTab(tabName) {
    // Hide all contents
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    // Deactivate all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Activate target
    document.querySelector(`#tab-${tabName}`).classList.add('active');
    document.querySelector(`.tab-btn[data-tab="${tabName}"]`).classList.add('active');
}

function setupEventListeners() {
    // Complete Button
    document.getElementById('btn-complete').addEventListener('click', toggleComplete);

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.target.dataset.tab);
        });
    });

    // Mobile Toggle
    document.getElementById('mobile-toggle').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('open');
    });
}
