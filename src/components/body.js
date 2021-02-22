import React, {Component} from 'react'

export default class Training extends Component {
    render()
    {
        return (
        <div>
            <div class="training">
                    <div class="training__dash"></div>
                    <h1 class="training__title">Chương trình đào tạo</h1>
                    <div>
                        <div class="table">
                            <div class="table__title">
                                <h3>phần cơ bản</h3>
                                <p>
                                    -- không giới hạn số người tham dự -- 
                                </p>
                            </div>
                            <div class="row first ">
                                <div class="col time"><span>Buổi 1</span></div>
                                <div class="col activity">
                                    <ul>
                                        <li><span>Ghi danh</span></li>
                                        <li><span>Giới thiệu về ReactJS (reactjs.org)</span></li>
                                        <li><span>Cài đặt môi trường cần thiết cho khóa học</span></li>
                                        <li><span>Tạo React App đầu tiên (Hello world!)</span></li>
                                        <li><span>Tạo React App giới thiệu bản thân (sử dụng html/css)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col time"><span>Buổi 2</span></div>
                                <div class="col activity">
                                    <ul>
                                        <li><span>JSX là gì ?</span></li>
                                        <li><span>Biểu thức trong JSX</span></li>
                                        <li><span>Render Element</span></li>
                                        <li><span>Cập nhật React App của bạn (sử dụng Object, Array, Biểu thức)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col time"><span>Buổi 3</span></div>
                                <div class="col activity">
                                    <ul>
                                        <li><span>Component và Props (Cách phân chia cấu trúc)</span></li>
                                        <li><span>Composing Component</span></li>
                                        <li><span>Extracting Components</span></li>
                                        <li><span>Cập nhật React App của bạn (Phân chia theo Component và Props)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row  ">
                                <div class="col time"><span>Buổi 5 - Buổi 6</span></div>
                                <div class="col activity">
                                    <ul>
                                        <li><span>State and Lifecycle</span></li>
                                        <li><span>Định nghĩa state trong Class và Function</span></li>
                                        <li><span>setState</span></li>
                                        <li><span>Lifecycle</span></li>
                                        <li><span>Điều kiện render - Rerender</span></li>
                                        <li><span>Cập nhật React App của bạn (Hiển thị yêu thích và ghét với 1 button switch mode hiển thị)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row  ">
                                <div class="col time"><span>Buổi 7 - Buổi 8</span></div>
                                <div class="col activity">
                                    <ul>
                                        <li><span>Xử lý sự kiện và Form</span></li>
                                        <li><span>Lấy dữ liệu của Form</span></li>
                                        <li><span>Refs</span></li>
                                        <li><span>Tạo React App todo list (hiển thị danh sách công việc, thêm, sửa, xóa)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row  ">
                                <div class="col time"><span>Buổi 9</span></div>
                                <div class="col activity">
                                    <ul>
                                        <li><span>API và fetch ở React</span></li>
                                        <li><span>Sử dụng với API mặc định và với các API đã được chuẩn bị</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row  ">
                                <div class="col time"><span>Buổi 10 - Buổi 11</span></div>
                                <div class="col activity">
                                    <ul>
                                        <li><span>react-router-dom</span></li>
                                        <li><span>Cài đặt và thiết lập react-router-dom và React App</span></li>
                                        <li><span>Bài tập cuối khóa (Quản lý các biểu mẫu khảo sát khách hàng)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
       
    }
}