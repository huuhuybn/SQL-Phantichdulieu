const courseData = {
    title: "Giáo Án Giảng Dạy: Data Analyst (DA101)",
    description: "Tài liệu hướng dẫn chi tiết dành cho Giảng viên. Cấu trúc 2 tiếng/buổi (1h Lý thuyết + 1h Thực hành).",
    modules: [
        {
            id: "mod1",
            title: "Module 1: Nền tảng Phân tích dữ liệu (8 Buổi)",
            summary: "Trang bị tư duy Data, quy trình phân tích và thành thạo Power BI cơ bản.",
            sessions: [
                {
                    id: "s1",
                    title: "Buổi 1: Tổng quan nghề Data Analyst & Ứng dụng AI",
                    content: `
                        <div class="lesson-plan">
                            <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                            
                            <div class="time-block">
                                <strong>00:00 - 15:00: Data Analyst làm gì trong thực tế? (Đa ngành nghề)</strong>
                                <p>DA không chỉ ngồi code, DA giải quyết bài toán kinh doanh. Ví dụ thực tế:</p>
                                <ul>
                                    <li><strong>F&B (Highlands/Starbucks):</strong>
                                        <ul>
                                            <li><em>Vấn đề:</em> Doanh thu buổi sáng đông nhưng lãi thấp.</li>
                                            <li><em>DA làm gì:</em> Phân tích hóa đơn, thấy 70% khách mua Cafe đều mua thêm bánh mì nếu giá giảm 10%. -> Đề xuất bán <strong>Combo Sáng</strong> để tăng giá trị đơn hàng (AOV).</li>
                                        </ul>
                                    </li>
                                    <li><strong>E-commerce (Shopee/TikTok Shop):</strong>
                                        <ul>
                                            <li><em>Vấn đề:</em> Khách bỏ hàng vào giỏ nhưng không thanh toán (Cart Abandonment).</li>
                                            <li><em>DA làm gì:</em> Gửi mã Freeship vào khung giờ vàng (12h trưa) cho nhóm này -> Tỷ lệ chốt đơn tăng 20%.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Ngân hàng (Banking - Tín dụng):</strong>
                                        <ul>
                                            <li><em>Vấn đề:</em> Cho vay ai để không bị "bùng"?</li>
                                            <li><em>DA làm gì:</em> Xây dựng <strong>Credit Score</strong> (Chấm điểm uy tín) dựa trên lịch sử trả nợ, chi tiêu thẻ tín dụng, nơi ở.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Nhân sự (HR):</strong>
                                        <ul>
                                            <li><em>Vấn đề:</em> Nhân viên giỏi hay nghỉ việc.</li>
                                            <li><em>DA làm gì:</em> Dự báo (Predict) ai sắp nghỉ việc dựa trên số ngày nghỉ phép tăng đột biến, thái độ làm việc -> HR can thiệp giữ người sớm.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>15:00 - 30:00: Quy trình thu thập dữ liệu (Lấy Data ở đâu?)</strong>
                                <ul>
                                    <li><strong>1. Nguồn nội bộ (Internal - Có sẵn):</strong>
                                        <ul>
                                            <li>Hệ thống máy tính tiền (POS), phần mềm kế toán (MISA).</li>
                                            <li>CRM (Quản lý khách hàng), ERP (Quản lý doanh nghiệp).</li>
                                            <li>File Excel rời rạc của các phòng ban (Sales gửi về, Kho gửi về).</li>
                                        </ul>
                                    </li>
                                    <li><strong>2. Nguồn bên ngoài (External - Phải đi tìm):</strong>
                                        <ul>
                                            <li><strong>Open Data (Miễn phí):</strong> Kaggle (kho dataset lớn nhất), Google Dataset Search, Tổng cục thống kê (GSO).</li>
                                            <li><strong>Social Listening:</strong> Dùng tool (BuzzSumo, YouScan) để "nghe" xem dân mạng đang chửi hay khen thương hiệu mình trên Facebook.</li>
                                            <li><strong>Web Scraping (Cào dữ liệu):</strong> Dùng tool (Instant Data Scraper) hoặc code Python để lấy giá bán của đối thủ trên web về so sánh.</li>
                                            <li><strong>Survey (Khảo sát):</strong> Google Forms, Typeform.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>30:00 - 45:00: Data Analyst có cần biết AI không?</strong>
                                <p><strong>Câu trả lời:</strong> BẮT BUỘC. "AI không thay thế bạn, nhưng người biết dùng AI sẽ thay thế bạn."</p>
                                <ul>
                                    <li><strong>ChatGPT/Claude để làm gì?</strong>
                                        <ul>
                                            <li><em>Viết Code:</em> "Viết cho tôi câu lệnh SQL lấy top 10 khách hàng chi tiêu nhiều nhất". (Giảm 80% thời gian gõ code).</li>
                                            <li><em>Giải thích lỗi:</em> Copy lỗi dán vào, AI chỉ cách sửa ngay lập tức.</li>
                                            <li><em>Brainstorm:</em> "Tôi có data bán hàng, hãy gợi ý 5 góc nhìn phân tích thú vị?".</li>
                                        </ul>
                                    </li>
                                    <li><strong>Github Copilot:</strong> Trợ lý code tự động điền code cho bạn.</li>
                                    <li><strong>ChatGPT Advanced Data Analysis:</strong> Upload file Excel lên, bảo AI "Vẽ biểu đồ xu hướng doanh thu" -> Nó làm hết trong 30s.</li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>45:00 - 60:00: Quy trình 6 bước (Google Data Analytics)</strong>
                                <p>Nhắc lại quy trình chuẩn: Ask -> Prepare -> Process -> Analyze -> Share -> Act.</p>
                            </div>
                        </div>
                    `,
                    exercises: `
                        <div class="lab-guide">
                            <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>
                            
                            <div class="task-block">
                                <strong>Bài 1: Sử dụng AI để lập kế hoạch (20 phút)</strong>
                                <p><strong>Yêu cầu:</strong> Mở ChatGPT (hoặc Claude).</p>
                                <p><strong>Prompt:</strong> "Đóng vai là một Chuyên viên phân tích dữ liệu cho chuỗi siêu thị. Hãy liệt kê 10 câu hỏi kinh doanh quan trọng nhất cần trả lời để tăng lợi nhuận cuối năm."</p>
                                <p>-> Học viên chọn ra 3 câu hỏi hay nhất và thảo luận với lớp.</p>
                            </div>

                            <div class="task-block">
                                <strong>Bài 2: Thực hành tìm kiếm Data (20 phút)</strong>
                                <ul>
                                    <li>Truy cập <a href="https://www.kaggle.com/" target="_blank">Kaggle.com</a>.</li>
                                    <li>Tìm kiếm từ khóa "E-commerce Sales" hoặc "Credit Card Fraud".</li>
                                    <li>Tải xuống 1 file CSV bất kỳ và mở lên bằng Excel xem nó có những cột gì.</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bài 3: Tư duy đặt vấn đề (Ask) (20 phút)</strong>
                                <p>Từ file dữ liệu vừa tải về (ví dụ file E-commerce), hãy đặt 3 câu hỏi "Tại sao":</p>
                                <ul>
                                    <li>Tại sao doanh thu tháng 2 thấp?</li>
                                    <li>Tại sao khách hàng ở TP.HCM mua nhiều hơn Hà Nội?</li>
                                    <li>Làm sao để biết mặt hàng nào đang tồn kho quá lâu?</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    id: "s2",
                    title: "Buổi 2: Dữ liệu ở đâu? (Data Sources & Cleaning)",
                    content: `
                        <div class="lesson-plan">
                            <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>

                            <div class="time-block">
                                <strong>00:00 - 20:00: Các nguồn dữ liệu</strong>
                                <ul>
                                    <li><strong>Internal (Nội bộ):</strong> CRM, ERP, File Excel kế toán. (Độ tin cậy cao).</li>
                                    <li><strong>External (Bên ngoài):</strong> Social Media, Chính phủ, Open Data. (Cần kiểm chứng).</li>
                                    <li><strong>Data Types:</strong>
                                        <ul>
                                            <li>Structured (Có cấu trúc): Bảng Excel, SQL.</li>
                                            <li>Unstructured (Phi cấu trúc): Ảnh, Video, Email.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>20:00 - 50:00: Tư duy làm sạch dữ liệu (Data Cleaning)</strong>
                                <p>Phân tích "Rác vào" thì "Rác ra" (Garbage In, Garbage Out). 80% thời gian DA là làm sạch.</p>
                                <ul>
                                    <li><strong>Dirty Data là gì?</strong> Thiếu (Null), Sai định dạng (Text trong cột số), Trùng lặp (Duplicate), Phi lý (Tuổi = 200).</li>
                                    <li><strong>Quy trình xử lý:</strong>
                                        <ol>
                                            <li>Quan sát tổng quan.</li>
                                            <li>Xác định lỗi.</li>
                                            <li>Quyết định: Sửa hay Xóa? (Xóa dòng thiếu hay điền giá trị trung bình?).</li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="time-block">
                                <strong>50:00 - 60:00: Giới thiệu Dataset mẫu</strong>
                                <p>Show dataset "Supermarket_Sales.csv" (File CSV kinh điển). Giải thích ý nghĩa từng cột.</p>
                            </div>
                        </div>
                    `,
                    exercises: `
                        <div class="lab-guide">
                            <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>
                            <p><strong>Công cụ:</strong> Excel / Google Sheets</p>

                            <div class="task-block">
                                <strong>Bài 1: Audit dữ liệu (20 phút)</strong>
                                <p>Mở file <code>Customer_Data_Dirty.csv</code> (Giảng viên chuẩn bị file có nhiều lỗi).</p>
                                <p><strong>Yêu cầu:</strong> Tìm và tô màu vàng vào ít nhất 5 lỗi sai trong file.</p>
                                <ul>
                                    <li>Cột Email không có @.</li>
                                    <li>Cột Ngày sinh bị định dạng text.</li>
                                    <li>Tên khách hàng viết hoa thường lộn xộn.</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bài 2: Clean & Standardize (30 phút)</strong>
                                <p>Sử dụng các hàm Excel cơ bản để làm sạch:</p>
                                <ul>
                                    <li><code>TRIM()</code>: Xóa khoảng trắng thừa.</li>
                                    <li><code>PROPER() / UPPER()</code>: Chuẩn hóa tên.</li>
                                    <li><code>Remove Duplicates</code>: Xóa dòng trùng.</li>
                                    <li>Search & Replace: Sửa lỗi chính tả.</li>
                                </ul>
                            </div>
                            
                            <div class="task-block">
                                <strong>Bài 3: Reflection (10 phút)</strong>
                                <p>Tại sao bạn lại chọn xóa dòng bị lỗi này mà không giữ lại? Thảo luận về sự đánh đổi (Trade-off) khi làm sạch.</p>
                            </div>
                        </div>
                    `
                },
                {
                    id: "s3",
                    title: "Buổi 3: Tiền xử lý dữ liệu (Preprocessing)",
                    content: `
                        <div class="lesson-plan">
                            <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>

                            <div class="time-block">
                                <strong>00:00 - 20:00: Tại sao phải Tiền xử lý?</strong>
                                <p>Clean xong chưa chắc đã Phân tích được. Cần biến đổi (Transform).</p>
                                <ul>
                                    <li><strong>Tách cột:</strong> "Họ Tên" -> "Họ", "Tên đệm", "Tên" (Để lọc theo vần).</li>
                                    <li><strong>Gộp cột:</strong> "Ngày", "Tháng", "Năm" -> "Date" (Để vẽ biểu đồ thời gian).</li>
                                    <li><strong>Tạo cột tính toán (Calculated Column):</strong> Có "Doanh thu" và "Giá vốn" -> Tính thêm cột "Lợi nhuận".</li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>20:00 - 45:00: Thống kê mô tả (Descriptive Statistics)</strong>
                                <ul>
                                    <li><strong>Mean (Trung bình):</strong> Đại diện chung. (Dễ bị sai lệch bởi giá trị đột biến).</li>
                                    <li><strong>Median (Trung vị):</strong> Giá trị ở giữa. (Tin cậy hơn khi có lương "sếp" quá cao).</li>
                                    <li><strong>Mode:</strong> Giá trị xuất hiện nhiều nhất. (Sản phẩm nào bán chạy nhất?).</li>
                                    <li><strong>Range (Khoảng biến thiên):</strong> Max - Min.</li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>45:00 - 60:00: Q&A và Demo Excel</strong>
                                <p>Demo tính Mean, Median trên Excel và so sánh sự khác biệt.</p>
                            </div>
                        </div>
                    `,
                    exercises: `
                        <div class="lab-guide">
                            <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>

                            <div class="task-block">
                                <strong>Bài 1: Transform Data (30 phút)</strong>
                                <p>Dataset: Danh sách 100 giao dịch Bất động sản.</p>
                                <p><strong>Yêu cầu:</strong></p>
                                <ol>
                                    <li>Cột "Địa chỉ" đang gộp (vd: "123 Đường A, Quận 1"). -> Dùng <code>Text to Columns</code> tách lấy "Quận".</li>
                                    <li>Phân loại giá: Tạo thêm cột "Phân khúc". Nếu Giá > 5 tỷ là "Cao cấp", < 2 tỷ là "Bình dân". (Dùng hàm <code>IF</code>).</li>
                                </ol>
                            </div>

                            <div class="task-block">
                                <strong>Bài 2: Pivot Table cơ bản (30 phút)</strong>
                                <p>Sự kỳ diệu của Pivot Table để tóm tắt dữ liệu.</p>
                                <p><strong>Yêu cầu:</strong></p>
                                <ul>
                                    <li>Kéo thả để tính Tổng doanh thu theo Quận.</li>
                                    <li>Tính Giá trung bình (Average Price) theo Phân khúc.</li>
                                    <li>Đếm số lượng giao dịch mỗi tháng.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    id: "s4",
                    title: "Buổi 4: Tư duy Trực quan hóa (Data Viz)",
                    content: `
                         <div class="lesson-plan">
                            <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>

                            <div class="time-block">
                                <strong>00:00 - 15:00: Sức mạnh của hình ảnh</strong>
                                <p>Não bộ xử lý hình ảnh nhanh gấp 60,000 lần văn bản. Show 2 slide so sánh: 1 bảng số liệu và 1 biểu đồ. Hỏi học viên cái nào dễ hiểu hơn?</p>
                            </div>

                            <div class="time-block">
                                <strong>15:00 - 40:00: Bản đồ chọn biểu đồ (Chart Selection)</strong>
                                <p>Quy tắc bất di bất dịch:</p>
                                <ul>
                                    <li><strong>So sánh (Comparison):</strong> Bar Chart (ngang), Column Chart (dọc). <br><em>Lưu ý: Trục tung phải bắt đầu từ 0.</em></li>
                                    <li><strong>Thay đổi theo thời gian (Trend):</strong> Line Chart.</li>
                                    <li><strong>Tỷ trọng (Composition):</strong> Pie Chart (chỉ dùng khi < 5 phần tử), Donut Chart, Stacked Bar.</li>
                                    <li><strong>Phân bố (Distribution):</strong> Histogram, Scatter Plot.</li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>40:00 - 60:00: Những sai lầm chết người (Bad Viz)</strong>
                                <ul>
                                    <li>Dùng Pie Chart 3D (Cấm kỵ!).</li>
                                    <li>Quá nhiều màu sặc sỡ (Lòe loẹt).</li>
                                    <li>Không có tiêu đề, chú thích.</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    exercises: `
                         <div class="lab-guide">
                            <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>
                            
                            <div class="task-block">
                                <strong>Bài 1: Phê bình biểu đồ (Critique) - 20 phút</strong>
                                <p>Giảng viên chiếu 5 biểu đồ "xấu xí" (tìm trên mạng "Bad Charts").</p>
                                <p>Yêu cầu học viên chỉ ra lỗi sai và đề xuất cách sửa.</p>
                            </div>

                            <div class="task-block">
                                <strong>Bài 2: Sketching (Vẽ tay) - 20 phút</strong>
                                <p>Tắt máy tính. Phát giấy A4.</p>
                                <p><strong>Đề bài:</strong> Vẽ phác thảo một Dashboard quản lý chi tiêu cá nhân. Bạn sẽ đặt biểu đồ nào ở đâu? Tại sao?</p>
                            </div>

                            <div class="task-block">
                                <strong>Bài 3: Thực hành Excel Chart (20 phút)</strong>
                                <p>Mở lại file Pivot Table buổi trước.</p>
                                <ul>
                                    <li>Vẽ 1 biểu đồ Cột so sánh Doanh thu các Quận.</li>
                                    <li>Vẽ 1 biểu đồ Đường thể hiện xu hướng giá trong 12 tháng.</li>
                                    <li>Chỉnh sửa Title, Axis Label cho chuyên nghiệp.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    id: "s5",
                    title: "Buổi 5: Data Model trong Power BI",
                    content: `
                         <div class="lesson-plan">
                            <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                            
                            <div class="time-block">
                                <strong>00:00 - 20:00: Tại sao Excel bị "crash"?</strong>
                                <p>Khi dữ liệu > 1 triệu dòng hoặc nằm rải rác ở 10 file, VLOOKUP sẽ làm treo máy. Power BI sinh ra để giải quyết việc này nhờ Data Model.</p>
                            </div>

                            <div class="time-block">
                                <strong>20:00 - 50:00: Star Schema (Mô hình Hình Sao)</strong>
                                <p>Khái niệm quan trọng nhất của BI.</p>
                                <ul>
                                    <li><strong>Fact Table (Bảng Sự kiện):</strong> Nằm ở giữa. Chứa các con số (Doanh thu, Số lượng). Dữ liệu phát sinh liên tục theo thời gian. <br><em>Vd: Bảng Hóa Đơn.</em></li>
                                    <li><strong>Dimension Table (Bảng Vệ tinh):</strong> Nằm xung quanh. Chứa thông tin mô tả (Ai, Cái gì, Ở đâu). Dữ liệu ít thay đổi. <br><em>Vd: Bảng Khách Hàng, Bảng Sản Phẩm, Bảng Cửa Hàng.</em></li>
                                </ul>
                                <p><strong>Relationship:</strong> Nối Fact với Dim qua "Khóa" (ID).</p>
                            </div>

                            <div class="time-block">
                                <strong>50:00 - 60:00: One-to-Many Relationship</strong>
                                <p>Giải thích quan hệ 1-Nhiều. (1 Khách hàng có Nhiều Hóa đơn). Đây là quan hệ chuẩn nhất.</p>
                            </div>
                        </div>
                    `,
                    exercises: `
                         <div class="lab-guide">
                            <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>
                            
                            <div class="task-block">
                                <strong>Bài 1: Load Data vào Power BI (15 phút)</strong>
                                <p>Cung cấp bộ dữ liệu <code>AdventureWorks Lite</code> (gồm 3 file CSV: Sales, Products, Customers).</p>
                                <p>Thao tác: Get Data -> Text/CSV -> Load.</p>
                            </div>

                            <div class="task-block">
                                <strong>Bài 2: Model View (30 phút)</strong>
                                <p>Chuyển sang tab <strong>Model View</strong> trong Power BI.</p>
                                <ul>
                                    <li>Kéo thả <code>Product_ID</code> từ bảng <code>Products</code> sang bảng <code>Sales</code>.</li>
                                    <li>Kéo thả <code>Customer_ID</code> từ bảng <code>Customers</code> sang bảng <code>Sales</code>.</li>
                                    <li>Kiểm tra đường nối: Có phải là 1-* (One to Many) không?</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bài 3: Kiểm tra Model (15 phút)</strong>
                                <p>Về tab Report. Kéo cột "Tên Sản Phẩm" (từ bảng Product) và "Doanh Thu" (từ bảng Sales) vào một bảng.</p>
                                <p>Nếu số liệu hiện ra đúng (không bị giống nhau hết) -> Model đã nối thành công.</p>
                            </div>
                        </div>
                    `
                },
                {
                    id: "s6",
                    title: "Buổi 6: Power BI Visualization (Cơ bản)",
                    content: `
                        <div class="lesson-plan">
                            <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                            
                            <div class="time-block">
                                <strong>00:00 - 15:00: Giao diện Power BI Report View</strong>
                                <p>Giới thiệu các vùng làm việc: Canvas, Visualizations Pane, Fields Pane.</p>
                            </div>
                            
                            <div class="time-block">
                                <strong>15:00 - 45:00: Các Visuals cốt lõi</strong>
                                <ul>
                                    <li><strong>Card:</strong> Hiển thị 1 con số KPI duy nhất (Vd: Tổng doanh thu).</li>
                                    <li><strong>Slicer (Bộ lọc):</strong> Để người dùng chọn Năm, Tháng, Khu vực.</li>
                                    <li><strong>Stacked Calendar/Bar:</strong> So sánh các hạng mục.</li>
                                    <li><strong>Matrix:</strong> Bảng số liệu chi tiết (Giống Pivot Table).</li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>45:00 - 60:00: Tư duy thiết kế layout (Grid Layout)</strong>
                                <ul>
                                    <li>KPI quan trọng nhất để trên cùng, bên trái.</li>
                                    <li>Các bộ lọc (Slicer) Gom về một góc hoặc một cột.</li>
                                    <li>Khoảng cách giữa các biểu đồ phải đều nhau.</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    exercises: `
                        <div class="lab-guide">
                            <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>
                            
                            <div class="task-block">
                                <strong>Bài 1: Tạo KPI Header (20 phút)</strong>
                                <p>Tiếp tục file buổi trước.</p>
                                <ul>
                                    <li>Tạo 3 thẻ Card: Tổng số đơn hàng, Tổng số lượng sản phẩm đã bán, Tổng doanh thu (chưa cần công thức phức tạp, cứ kéo cột Amount vào).</li>
                                    <li>Sắp xếp 3 thẻ nằm ngang hàng trên cùng.</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bài 2: Vẽ biểu đồ phân tích (30 phút)</strong>
                                <ul>
                                    <li>Vẽ Bar Chart: Top 5 Sản phẩm bán chạy nhất.</li>
                                    <li>Vẽ Column Chart: Doanh thu theo từng Quốc Gia (Cột Country trong bảng Customer).</li>
                                    <li>Thêm Slicer: Cho phép lọc theo Loại sản phẩm (Category).</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bài 3: Formatting (10 phút)</strong>
                                <p>Đổi màu cột thành màu thương hiệu công ty (Xanh đậm). Đổi tiêu đề biểu đồ sang tiếng Việt.</p>
                            </div>
                        </div>
                    `
                },
                {
                    id: "s7",
                    title: "Buổi 7: Power BI Nâng cao (DAX & Interactive)",
                    content: `
                        <div class="lesson-plan">
                            <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                            
                            <div class="time-block">
                                <strong>00:00 - 30:00: Giới thiệu DAX (Data Analysis Expressions)</strong>
                                <p>DAX là "linh hồn" của Power BI. Nó giống công thức Excel nhưng tính toán trên cột và bảng.</p>
                                <p>Hai loại chính:</p>
                                <ul>
                                    <li><strong>Calculated Column:</strong> Tính toán từng dòng, lưu cứng vào file (Tốn RAM).</li>
                                    <li><strong>Measure:</strong> Công thức ảo, chỉ tính khi vẽ lên biểu đồ (Tiết kiệm RAM, linh hoạt). <strong>-> Khuyên dùng Measure.</strong></li>
                                </ul>
                            </div>

                            <div class="time-block">
                                <strong>30:00 - 60:00: Các hàm DAX cơ bản</strong>
                                <ul>
                                    <li><code>SUM, AVERAGE, COUNTROWS</code>.</li>
                                    <li><code>CALCULATE</code>: Hàm quan trọng nhất! (Giống SUMIFS nhưng mạnh hơn). <br><em>Vd: Tính doanh thu RIÊNG màu đỏ.</em></li>
                                    <li><code>DIVIDE</code>: Chia an toàn (tránh lỗi chia cho 0).</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    exercises: `
                        <div class="lab-guide">
                            <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>

                            <div class="task-block">
                                <strong>Bài 1: Tạo Measure cơ bản (20 phút)</strong>
                                <ul>
                                    <li>New Measure: <code>Tong Doanh Thu = SUM(Sales[Amount])</code>.</li>
                                    <li>New Measure: <code>So Don Hang = COUNTROWS(Sales)</code>.</li>
                                    <li>New Measure: <code>Gia Tri Trung Binh Don = DIVIDE([Tong Doanh Thu], [So Don Hang])</code>.</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bài 2: Sức mạnh của CALCULATE (20 phút)</strong>
                                <p>Yêu cầu: Sếp muốn so sánh Doanh thu Màu đỏ so với Tổng doanh thu.</p>
                                <ul>
                                    <li>Viết Measure: <code>Doanh Thu Do = CALCULATE([Tong Doanh Thu], 'Product'[Color] = "Red")</code>.</li>
                                    <li>Kéo vào Card để xem kết quả.</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bài 3: Tương tác (Interaction) (20 phút)</strong>
                                <ul>
                                    <li>Bật tính năng <strong>Edit Interactions</strong>.</li>
                                    <li>Cấu hình để khi click vào biểu đồ "Quốc gia", biểu đồ "Sản phẩm" không bị lọc theo mà giữ nguyên (tùy tình huống).</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    id: "s8",
                    title: "Buổi 8: Dự án cuối Module 1",
                    content: `
                        <div class="lesson-plan">
                            <h4>DỰ ÁN TỔNG HỢP (120 PHÚT)</h4>
                            <p>Buổi này học viên sẽ tự làm là chính (90 phút), giảng viên chỉ đóng vai trò Mentor hướng dẫn và Review (30 phút cuối).</p>
                            
                            <div class="time-block">
                                <strong>Đề bài Project: Sales Dashboard</strong>
                                <p><strong>Bối cảnh:</strong> Bạn là DA của công ty bán lẻ quần áo thời trang.</p>
                                <p><strong>Dữ liệu:</strong> File <code>Fashion_Sales_2023.xlsx</code> (50,000 dòng). Gồm các bảng: Orders, People (Salesman), Returns (Đơn trả).</p>
                                
                                <p><strong>Yêu cầu của Giám đốc Kinh doanh:</strong></p>
                                <ol>
                                    <li><strong>Tổng quan:</strong> Tình hình kinh doanh năm nay so với năm ngoái? (Tăng hay giảm?).</li>
                                    <li><strong>Sản phẩm:</strong> Nhóm hàng nào (Áo, Quần, Phụ kiện) đang gánh doanh số? Nhóm nào đang lỗ?</li>
                                    <li><strong>Nhân viên:</strong> Top 5 nhân viên xuất sắc nhất tháng vừa rồi?</li>
                                    <li><strong>Tỉ lệ trả hàng:</strong> Có cao không? Tập trung ở sản phẩm nào?</li>
                                </ol>
                            </div>
                        </div>
                    `,
                    exercises: `
                        <div class="lab-guide">
                            <h4>HƯỚNG DẪN THỰC HIỆN TỪNG BƯỚC</h4>
                            
                            <div class="task-block">
                                <strong>Bước 1: ETL (30 phút)</strong>
                                <ul>
                                    <li>Load dữ liệu. Check cột Ngày tháng có đúng định dạng Date chưa?</li>
                                    <li>Xử lý bảng Returns (Có thể phải JOIN với bảng Orders để biết đơn nào bị trả).</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bước 2: Modeling & DAX (30 phút)</strong>
                                <ul>
                                    <li>Tạo Calendar Table (Bảng lịch) để phân tích time-series tốt hơn.</li>
                                    <li>Viết các measure: <code>Total Sales</code>, <code>Total Returns</code>, <code>Return Rate = Returns / Sales</code>.</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bước 3: Visualization & Storytelling (30 phút)</strong>
                                <ul>
                                    <li>Phác thảo bố cục (Layout).</li>
                                    <li>Vẽ biểu đồ. Lưu ý màu sắc: Doanh thu (Xanh), Trả hàng (Đỏ_cảnh báo).</li>
                                    <li>Thêm Slicer Năm/Tháng.</li>
                                </ul>
                            </div>

                            <div class="task-block">
                                <strong>Bước 4: Presentation (30 phút)</strong>
                                <p>Mỗi học viên lên trình bày 3 phút về key insight tìm được.</p>
                                <p>Giảng viên góp ý về: Lựa chọn biểu đồ, Cách đặt vấn đề, Độ chính xác số liệu.</p>
                            </div>
                        </div>
                    `
                },
                // MODULE 2: SQL - Lesson Plans
                 {
                    id: "mod2",
                    title: "Module 2: SQL trong Phân tích dữ liệu (6 Buổi)",
                    summary: "Làm chủ ngôn ngữ truy vấn dữ liệu SQL.",
                    sessions: [
                        {
                            id: "s9",
                            title: "Buổi 9: Cơ sở dữ liệu & SELECT cơ bản",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    
                                    <div class="time-block">
                                        <strong>00:00 - 20:00: RDBMS là gì?</strong>
                                        <p>Giới thiệu Hệ quản trị CSDL quan hệ (SQL Server, MySQL, PostgreSQL).</p>
                                        <p>Cấu trúc: Database -> Schema -> Table -> Column/Row.</p>
                                        <p>Khái niệm Primary Key (Khóa chính - CMND của dòng) và Foreign Key (Khóa ngoại - Cầu nối).</p>
                                    </div>

                                    <div class="time-block">
                                        <strong>20:00 - 40:00: SELECT & FROM</strong>
                                        <p>Cú pháp cốt lõi: <code>SELECT [Cột nào] FROM [Bảng nào]</code>.</p>
                                        <p>Mẹo: Dùng <code>SELECT *</code> để xem nhanh, nhưng khi làm việc thật thì hạn chế (nên liệt kê tên cột cụ thể để tối ưu hiệu năng).</p>
                                    </div>

                                    <div class="time-block">
                                        <strong>40:00 - 60:00: WHERE (Bộ lọc)</strong>
                                        <p>Lấy dữ liệu theo điều kiện.</p>
                                        <ul>
                                            <li>So sánh: <code>=, >, <, >=, <=, <> (Khác)</code>.</li>
                                            <li>Logic: <code>AND, OR, NOT</code>.</li>
                                            <li>Phạm vi: <code>BETWEEN</code>, <code>IN (1, 2, 3)</code>.</li>
                                        </ul>
                                    </div>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>
                                    <p>Sử dụng: <strong>SQL Online Compiler</strong> hoặc cài đặt <strong>DBeaver</strong> kết nối tới database mẫu.</p>
                                    
                                    <div class="task-block">
                                        <strong>Bài 1: Truy vấn đơn giản (20 phút)</strong>
                                        <p>Bảng <code>Employees</code> (EmployeeID, LastName, FirstName, Title, BirthDate, City).</p>
                                        <ol>
                                            <li>Lấy ra Họ, Tên và Chức vụ của tất cả nhân viên.</li>
                                            <li>Lấy ra danh sách nhân viên sống tại 'London'.</li>
                                        </ol>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 2: Sử dụng các toán tử logic (20 phút)</strong>
                                        <ol>
                                            <li>Tìm nhân viên có chức vụ 'Sales Representative' VÀ sống ở 'London'.</li>
                                            <li>Tìm đơn hàng (Orders) có phí ship (Freight) > 100 HOẶC được gửi tới quốc gia 'USA'.</li>
                                        </ol>
                                    </div>
                                    
                                    <div class="task-block">
                                        <strong>Bài 3: Thử thách (20 phút)</strong>
                                        <p>Tìm danh sách Sản phẩm (Products) có đơn giá (UnitPrice) từ 50 đến 100 bảng, ngoại trừ những sản phẩm đã ngừng kinh doanh (Discontinued = 1).</p>
                                    </div>
                                </div>
                            `
                        },
                        {
                            id: "s10",
                            title: "Buổi 10: Aggregate Functions & GROUP BY",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    
                                    <div class="time-block">
                                        <strong>00:00 - 20:00: Các hàm tổng hợp (Aggregation)</strong>
                                        <p>Biến nhiều dòng thành 1 dòng.</p>
                                        <ul>
                                            <li><code>COUNT(*)</code> vs <code>COUNT(Column)</code> (Lưu ý NULL không được đếm).</li>
                                            <li><code>SUM, AVG, MIN, MAX</code>.</li>
                                        </ul>
                                    </div>

                                    <div class="time-block">
                                        <strong>20:00 - 45:00: GROUP BY (Gom nhóm)</strong>
                                        <p>Hiểu cơ chế "Split - Apply - Combine".</p>
                                        <p>Ví dụ: Tính tổng lương theo từng phòng ban. Máy tính sẽ chia bảng lương thành các nhóm phòng ban nhỏ, tính tổng từng nhóm, rồi gộp lạ kết quả.</p>
                                        <p><strong>Quy tắc quan trọng:</strong> Bất cứ cột nào trong SELECT không nằm trong hàm Aggregate thì BẮT BUỘC phải nằm trong GROUP BY.</p>
                                    </div>

                                    <div class="time-block">
                                        <strong>45:00 - 60:00: HAVING vs WHERE</strong>
                                        <p>Câu hỏi phỏng vấn kinh điển!</p>
                                        <ul>
                                            <li><code>WHERE</code>: Lọc dòng TRƯỚC khi gom nhóm (Lọc dữ liệu thô).</li>
                                            <li><code>HAVING</code>: Lọc nhóm SAU khi gom nhóm (Lọc kết quả tổng hợp).</li>
                                        </ul>
                                    </div>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>
                                    
                                    <div class="task-block">
                                        <strong>Bài 1: Thống kê cơ bản (20 phút)</strong>
                                        <ul>
                                            <li>Có bao nhiêu khách hàng trong bảng Customers?</li>
                                            <li>Đơn hàng nào có phí ship cao nhất lịch sử?</li>
                                            <li>Tính độ tuổi trung bình của nhân viên công ty.</li>
                                        </ul>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 2: GROUP BY (20 phút)</strong>
                                        <ul>
                                            <li>Đếm số lượng khách hàng theo từng Quốc gia. Sắp xếp giảm dần để xem quốc gia nào đông khách nhất?</li>
                                            <li>Tính tổng doanh thu theo từng Năm.</li>
                                        </ul>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 3: WHERE kết hợp HAVING (20 phút)</strong>
                                        <p>Hãy liệt kê các Quốc gia có số lượng khách hàng > 5 người.</p>
                                        <p><em>Code mẫu:</em> <code>SELECT Country, COUNT(*) FROM Customers GROUP BY Country HAVING COUNT(*) > 5;</code></p>
                                        <p>Nâng cao: Chỉ tính các khách hàng có chức vụ là 'Owner'. (Dùng WHERE Title = 'Owner' trước, rồi mới Group).</p>
                                    </div>
                                </div>
                            `
                        },
                         {
                            id: "s11",
                            title: "Buổi 11: JOIN (Kết nối bảng)",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    
                                    <div class="time-block">
                                        <strong>00:00 - 15:00: Tư duy Relational Database</strong>
                                        <p>Tại sao lại tách bảng? (Normalization - Chống trùng lặp dữ liệu).</p>
                                        <p>Khi cần báo cáo tổng hợp, ta phải JOIN lại.</p>
                                    </div>

                                    <div class="time-block">
                                        <strong>15:00 - 45:00: Các loại JOIN (Vẽ Diagram minh họa)</strong>
                                        <ul>
                                            <li><strong>INNER JOIN (Mặc định):</strong> Chỉ lấy phần chung. (Khách có đơn hàng).</li>
                                            <li><strong>LEFT JOIN (Quan trọng nhất):</strong> Lấy hết bảng trái, bảng phải không có thì để NULL. (Lấy danh sách tất cả Khách hàng, kể cả người chưa mua gì - để gọi điện chào hàng).</li>
                                            <li><strong>RIGHT JOIN:</strong> Ngược lại của Left (Ít dùng).</li>
                                            <li><strong>FULL JOIN:</strong> Lấy tất cả.</li>
                                        </ul>
                                    </div>

                                    <div class="time-block">
                                        <strong>45:00 - 60:00: Cạm bẫy khi JOIN</strong>
                                        <p>Nhân đôi dữ liệu (Duplication) khi quan hệ 1-Nhiều không được xử lý kỹ.</p>
                                    </div>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>

                                    <div class="task-block">
                                        <strong>Bài 1: INNER JOIN (20 phút)</strong>
                                        <p>Từ bảng <code>Orders</code> và <code>Employees</code>.</p>
                                        <p>Hãy in ra danh sách các đơn hàng gồm: OrderID, OrderDate và <strong>Họ tên nhân viên phụ trách</strong> (thay vì chỉ hiện EmployeeID vô nghĩa).</p>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 2: LEFT JOIN (20 phút)</strong>
                                        <p>Tìm danh sách các Khách hàng (Customers) <strong>chưa từng mua đơn hàng nào</strong>.</p>
                                        <p><em>Gợi ý:</em> LEFT JOIN Customers với Orders. Sau đó lọc WHERE OrderID IS NULL.</p>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 3: Multi-Join (Join nhiều bảng) (20 phút)</strong>
                                        <p>In ra chi tiết đơn hàng 10248 gồm: Tên Sản Phẩm (từ bảng Products), Số Lượng (từ OrderDetails), Giá Bán (từ OrderDetails) và Tên Nhà Cung Cấp (từ Suppliers).</p>
                                        <p>(Cần JOIN 3-4 bảng với nhau).</p>
                                    </div>
                                </div>
                            `
                        },
                         {
                            id: "s12",
                            title: "Buổi 12: Advanced SQL (Window Functions & CTE)",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    
                                    <div class="time-block">
                                        <strong>00:00 - 30:00: Window Functions là gì?</strong>
                                        <p>Khác biệt với Group By: Window Function tính toán nhưng <strong>không làm mất dòng chi tiết</strong>.</p>
                                        <p>Cú pháp: <code>Hàm() OVER (PARTITION BY ... ORDER BY ...)</code>.</p>
                                        <ul>
                                            <li><code>ROW_NUMBER()</code>: Đánh số thứ tự 1, 2, 3...</li>
                                            <li><code>RANK()</code>: Xếp hạng (1, 2, 2, 4...).</li>
                                            <li><code>DENSE_RANK()</code>: Xếp hạng dày (1, 2, 2, 3...).</li>
                                            <li><code>LEAD() / LAG()</code>: Lấy giá trị dòng sau / dòng trước (Tính tăng trưởng).</li>
                                        </ul>
                                    </div>

                                    <div class="time-block">
                                        <strong>30:00 - 60:00: CTE (Common Table Expression)</strong>
                                        <p>Thay vì viết Subquery lồng nhau rối rắm <code>(SELECT ... FROM (SELECT ...))</code>, ta dùng <code>WITH bang_tam AS (...)</code>.</p>
                                        <p>Giúp code dễ đọc, dễ debug như đọc văn xuôi.</p>
                                    </div>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>

                                    <div class="task-block">
                                        <strong>Bài 1: Xếp hạng sản phẩm (Ranking) (20 phút)</strong>
                                        <p>Với mỗi loại sản phẩm (Category), hãy tìm ra top 3 sản phẩm có giá cao nhất.</p>
                                        <p>Dùng <code>DENSE_RANK() OVER (PARTITION BY CategoryID ORDER BY UnitPrice DESC)</code>.</p>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 2: So sánh ngày hôm qua (Lag) (20 phút)</strong>
                                        <p>Có bảng DoanhThuNgay (Ngay, DoanhThu).</p>
                                        <p>Hãy tạo thêm cột "DoanhThuHomQua" bằng hàm <code>LAG()</code>.</p>
                                        <p>Từ đó tính cột "% Tăng Trưởng" = (Hôm nay - Hôm qua) / Hôm qua.</p>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 3: Viết lại bằng CTE (20 phút)</strong>
                                        <p>Lấy bài tập Complex Join buổi trước, viết lại cấu trúc dùng <code>WITH</code> để rõ ràng hơn.</p>
                                    </div>
                                </div>
                            `
                        },
                         {
                            id: "s13",
                            title: "Buổi 13: Xử lý dữ liệu nâng cao (String & Date)",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    
                                    <div class="time-block">
                                        <strong>00:00 - 20:00: Xử lý chuỗi (String)</strong>
                                        <ul>
                                            <li><code>CONCAT(a, b)</code>: Nối chuỗi.</li>
                                            <li><code>SUBSTRING(str, start, len)</code>: Cắt chuỗi.</li>
                                            <li><code>UPPER/LOWER</code>.</li>
                                            <li><code>LIKE</code> và Wildcards (<code>%</code>, <code>_</code>).</li>
                                        </ul>
                                    </div>

                                    <div class="time-block">
                                        <strong>20:00 - 40:00: Xử lý Ngày tháng (Date Time)</strong>
                                        <ul>
                                            <li><code>DATEPART(year, date)</code>: Lấy năm.</li>
                                            <li><code>DATEDIFF(day, start, end)</code>: Tính khoảng cách 2 ngày (Vd: Tính thâm niên nhân viên, thời gian giao hàng).</li>
                                            <li><code>DATEADD</code>: Cộng trừ ngày.</li>
                                        </ul>
                                    </div>

                                    <div class="time-block">
                                        <strong>40:00 - 60:00: CASE WHEN (Logic điều kiện)</strong>
                                        <p>Giống hàm IF trong Excel nhưng dùng trong câu lệnh SELECT.</p>
                                    </div>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>BÀI TẬP THỰC HÀNH (60 PHÚT)</h4>

                                    <div class="task-block">
                                        <strong>Bài 1: Phân tích thâm niên (20 phút)</strong>
                                        <ul>
                                            <li>Tính số tuổi của mỗi nhân viên (Năm hiện tại - Năm sinh).</li>
                                            <li>Tính thâm niên làm việc (Năm hiện tại - Năm vào làm).</li>
                                            <li>Dùng <code>CASE WHEN</code> để phân loại: > 10 năm là "Senior", < 10 năm là "Junior".</li>
                                        </ul>
                                    </div>

                                    <div class="task-block">
                                        <strong>Bài 2: Tính thời gian giao hàng (20 phút)</strong>
                                        <p>Trong bảng Orders, có <code>OrderDate</code> (Ngày đặt) và <code>ShippedDate</code> (Ngày ship).</p>
                                        <p>Hãy tính số ngày giao hàng trung bình của từng đơn vị vận chuyển (ShipVia).</p>
                                        <p>Đơn vị nào giao nhanh nhất?</p>
                                    </div>
                                </div>
                            `
                        },
                         {
                            id: "s14",
                            title: "Buổi 14: Dự án Module 2 (SQL Project)",
                            content: `
                                <div class="lesson-plan">
                                    <h4>DỰ ÁN CUỐI KỲ SQL (120 PHÚT)</h4>
                                    
                                    <div class="time-block">
                                        <strong>Đề bài: Northwind Trader Analysis</strong>
                                        <p>Sử dụng Database Northwind nổi tiếng.</p>
                                        <p><strong>Yêu cầu 1: Cohort Analysis (Phân tích giữ chân)</strong></p>
                                        <ul>
                                            <li>Khách hàng mua hàng lần đầu vào tháng 1/1997. Bao nhiêu % trong số họ quay lại mua vào tháng 2, tháng 3...?</li>
                                        </ul>

                                        <p><strong>Yêu cầu 2: RFM Analysis (Phân khúc khách hàng)</strong></p>
                                        <ul>
                                            <li>Tính 3 chỉ số cho mỗi khách hàng:
                                                <ul>
                                                    <li><strong>Recency:</strong> Lần cuối mua cách đây bao lâu?</li>
                                                    <li><strong>Frequency:</strong> Đã mua bao nhiêu đơn?</li>
                                                    <li><strong>Monetary:</strong> Tổng tiền đã chi?</li>
                                                </ul>
                                            </li>
                                            <li>Dùng NTILE(5) để chấm điểm từ 1-5 cho từng chỉ số.</li>
                                        </ul>
                                    </div>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>HƯỚNG DẪN GỢI Ý</h4>
                                    
                                    <div class="task-block">
                                        <strong>Gợi ý RFM:</strong>
                                        <pre><code>
WITH rfm_stats AS (
    SELECT 
        CustomerID,
        DATEDIFF(day, MAX(OrderDate), '1998-05-06') as Recency,
        COUNT(OrderID) as Frequency,
        SUM(Freight) as Monetary -- (Giả sử Freight là doanh thu ví dụ)
    FROM Orders
    GROUP BY CustomerID
)
SELECT 
    *,
    NTILE(5) OVER (ORDER BY Recency DESC) as R_Score,
    NTILE(5) OVER (ORDER BY Frequency ASC) as F_Score
FROM rfm_stats;
                                        </code></pre>
                                        <p>Học viên cần hoàn thiện code và giải thích ý nghĩa các nhóm khách hàng (Vd: R=5, F=5 là khách hàng Kim Cương).</p>
                                    </div>
                                </div>
                            `
                        }
                    ]
                },
                {
                    id: "mod3", // Continued... I will add Mode 3 & 4 with lighter Lesson Plan structure to save space but maintain consistency
                    title: "Module 3: Python cho Phân tích dữ liệu (8 Buổi)",
                    summary: "Lập trình Python để tự động hóa và phân tích sâu.",
                    sessions: [
                         {
                            id: "s15",
                            title: "Buổi 15: Làm quen Python & Jupyter Notebook",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    <ul>
                                        <li><strong>Môi trường:</strong> Hướng dẫn cài Anaconda / Google Colab (Tiện nhất cho lớp học).</li>
                                        <li><strong>Biến & Kiểu dữ liệu:</strong> String, Int, Float, Bool.</li>
                                        <li><strong>Print & Input:</strong> Tương tác cơ bản.</li>
                                    </ul>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>THỰC HÀNH</h4>
                                    <p>Bài 1: Viết chương trình "Máy tính tiền". Nhập vào số lượng, đơn giá -> In ra thành tiền.</p>
                                    <p>Bài 2: Viết chương trình đổi nhiệt độ C sang F.</p>
                                </div>
                            `
                        },
                        {
                            id: "s16",
                            title: "Buổi 16: List, Dictionary & Vòng lặp",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    <ul>
                                        <li><strong>List:</strong> <code>ds_hoc_vien = ['A', 'B', 'C']</code>. Truy cập index 0, 1, 2.</li>
                                        <li><strong>Dictionary:</strong> <code>thong_tin = {'ten': 'A', 'tuoi': 20}</code>.</li>
                                        <li><strong>For Loop:</strong> Duyệt qua danh sách.</li>
                                        <li><strong>If/Else:</strong> Điều kiện rẽ nhánh.</li>
                                    </ul>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>THỰC HÀNH</h4>
                                    <p>Bài 1: Cho một list điểm số. Dùng vòng lặp tính điểm trung bình và tìm điểm cao nhất.</p>
                                    <p>Bài 2: Đếm số lần xuất hiện của các từ trong một đoạn văn (Dùng Dictionary).</p>
                                </div>
                            `
                        },
                        {
                            id: "s17",
                            title: "Buổi 17: Pandas - Data Analysis Library",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    <p>Giới thiệu thư viện quan trọng nhất của DA.</p>
                                    <ul>
                                        <li><code>import pandas as pd</code></li>
                                        <li><code>pd.read_csv()</code>, <code>pd.read_excel()</code>.</li>
                                        <li>DataFrame & Series.</li>
                                        <li>Hàm <code>head(), info(), describe()</code>.</li>
                                    </ul>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>THỰC HÀNH</h4>
                                    <p>Load file "IMDB-Movie-Data.csv".</p>
                                    <ul>
                                        <li>In ra 5 bộ phim doanh thu cao nhất.</li>
                                        <li>Tính doanh thu trung bình của các bộ phim từ năm 2010-2016.</li>
                                    </ul>
                                </div>
                            `
                        },
                         {
                            id: "s18",
                            title: "Buổi 18: Thao tác dữ liệu với Pandas",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    <ul>
                                        <li><strong>Filtering:</strong> <code>df[df['col'] > 5]</code>.</li>
                                        <li><strong>Grouping:</strong> <code>df.groupby('Category')['Sales'].sum()</code>.</li>
                                        <li><strong>Missing Value:</strong> <code>fillna(), dropna()</code>.</li>
                                    </ul>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>THỰC HÀNH</h4>
                                    <p>Dataset: Titanic Survival.</p>
                                    <ul>
                                        <li>Tỉ lệ sống sót của Nam và Nữ khác nhau thế nào? (Groupby Sex).</li>
                                        <li>Lấp đầy tuổi bị thiếu bằng tuổi trung bình.</li>
                                    </ul>
                                </div>
                            `
                        },
                         {
                            id: "s19",
                            title: "Buổi 19: Python Visualization",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    <ul>
                                        <li><strong>Matplotlib:</strong> Vẽ cơ bản. <code>plt.plot()</code>.</li>
                                        <li><strong>Seaborn:</strong> Vẽ thống kê đẹp. <code>sns.boxplot()</code>, <code>sns.heatmap()</code> (Vẽ ma trận tương quan).</li>
                                    </ul>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>THỰC HÀNH</h4>
                                    <p>Vẽ biểu đồ phân phối (Histogram) độ tuổi hành khách Titanic.</p>
                                    <p>Vẽ biểu đồ Boxplot so sánh giá vé giữa 3 hạng ghế (Pclass).</p>
                                </div>
                            `
                        },
                         {
                            id: "s20",
                            title: "Buổi 20: Kiểm định thống kê (Hypothesis Testing)",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    <ul>
                                        <li>Quy trình kiểm định giả thuyết (Null Hypothesis).</li>
                                        <li>T-test: So sánh trung bình 2 nhóm. (Vd: Điểm thi lớp A có cao hơn lớp B thực sự không?).</li>
                                        <li>P-value: Ngưỡng 0.05.</li>
                                    </ul>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>THỰC HÀNH</h4>
                                    <p>Dùng <code>scipy.stats</code> để kiểm định xem giá vé trung bình của Nam và Nữ trên tàu Titanic có khác biệt ý nghĩa thống kê không?</p>
                                </div>
                            `
                        },
                         {
                            id: "s21",
                            title: "Buổi 21: Machine Learning cơ bản (Regression)",
                            content: `
                                <div class="lesson-plan">
                                    <h4>GIÁO ÁN LÝ THUYẾT (60 PHÚT)</h4>
                                    <ul>
                                        <li>Hồi quy tuyến tính (Linear Regression): Dự báo số lượng.</li>
                                        <li>Chia tập Train/Test (70/30).</li>
                                        <li>Thư viện <code>scikit-learn</code>.</li>
                                    </ul>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>THỰC HÀNH</h4>
                                    <p>Dự báo giá nhà Boston (Dataset có sẵn của Sklearn).</p>
                                    <ul>
                                        <li>Input: Số phòng ngủ, diện tích.</li>
                                        <li>Output: Giá nhà.</li>
                                        <li>Đánh giá sai số (MSE).</li>
                                    </ul>
                                </div>
                            `
                        },
                         {
                            id: "s22",
                            title: "Buổi 22: Dự án Module 3 (Python) ",
                            content: `
                                <div class="lesson-plan">
                                    <h4>DỰ ÁN CUỐI MODULE (120 PHÚT)</h4>
                                    <p><strong>Đề tài: Exploratory Data Analysis (EDA) on E-commerce Data.</strong></p>
                                    <p>Yêu cầu thực hiện trọn vẹn trên Jupyter Notebook: Load -> Clean -> Analyze -> Visualize -> Conclusion.</p>
                                </div>
                            `,
                            exercises: `
                                <div class="lab-guide">
                                    <h4>CHECKLIST</h4>
                                    <ul>
                                        <li>Code chạy không lỗi.</li>
                                        <li>Có comment giải thích code.</li>
                                        <li>Mỗi biểu đồ phải có nhận xét (Markdown text) bên dưới.</li>
                                    </ul>
                                </div>
                            `
                        }
                    ]
                },
        {
            id: "mod4",
            title: "Module 4: Sự nghiệp",
            summary: "Chuẩn bị hành trang xin việc.",
            sessions: [
                {
                    id: "s23",
                    title: "Buổi 23: Capstone Project",
                    content: "Hướng dẫn học viên chọn và làm dự án lớn cuối khóa.",
                    exercises: "Mỗi học viên chốt đề tài và phác thảo kế hoạch."
                },
                {
                    id: "s24",
                    title: "Buổi 24: Portfolio & Interview",
                    content: "Review CV, Mock Interview, chia sẻ kinh nghiệm phỏng vấn.",
                    exercises: "Thực hành phỏng vấn thử 1-1."
                }
            ]
        }
    ]
};
