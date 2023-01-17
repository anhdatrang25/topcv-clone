import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header>
  <a href className="logo"><img src={this.props.logo} /></a>
  <div id="menu" className="fas fa-bars" />
  <div className="navbar">
    <li className="job"><a href>Việc làm</a>
      <ul className="sub-menu">
        <div className="right">
          <p>Tìm việc làm</p>
          <p>Việc làm phù hợp</p>
          <p>Việc làm IT</p>
          <p>Việc làm Senior</p>
        </div>
        <div className="left">
          <img src={this.props.sub1} />
        </div>
      </ul>
    </li>
    <li><a className="cv" href>Hồ sơ &amp; CV</a>
      <ul className="sub-menu">
        <div className="right">
          <p><Link to="/maucv">Mẫu CV</Link></p>
          <p>Mẫu Cover Letter</p>
          <p>Dịch vụ tư vấn CV</p>
          <p>Hướng dẫn viết CV theo ngành nghề</p>
          <p>TopCV Profile</p>
        </div>
        <div className="left">
          <img src={this.props.sub2} />
        </div>
      </ul>
    </li>
    <li><a href>Công ty</a>
      <ul className="sub-menu2">
        <div className="right">
          <p>Danh sách Công Ty</p>
          <p>Top Công Ty</p>
        </div>
      </ul></li>
    <li><a className="pt" href>Phát triển &amp; Sự nghiệp</a>
      <ul className="sub-menu">
        <div className="right">
          <p>TopCV Contest</p>
          <p>TopCV Skills Mới</p>
          <p>Trắc nghiệm tính cách MBTI</p>
          <p>Trắc nghiệm MI</p>
        </div>
        <div className="left">
          <img src={this.props.sub3} />
        </div>
      </ul></li>
    <li><a className="congcu" href>Công cụ</a>
      <ul className="sub-menu1">
        <div className="right">
          <p>Tính lương GROSS - NET</p>
          <p>Tính lãi suất kép</p>
          <p>Lập kế hoạch tiết kiệm</p>
          <p>Tính Bảo hiểm thất nghiệp</p>
          <p>Tính bảo hiểm xã hội một lần</p>
          <p> Mobile App TopCV</p>
        </div>
      </ul>
    </li>

    <li className="job"><Link to="/danhgia">Đánh giá</Link>                
</li>

<li className="job"><Link to="/goivip">Mua Gói Vip</Link>                
</li>

  </div>
  <div className="right-menu">
    <Link to="/dangnhap" className="sigin">Đăng Nhập</Link>
    <Link to="/dangky" className="register">Đăng Ký</Link>
    <a href className="search-hs">Đăng tuyển &amp; Tìm hồ sơ</a>
  </div>
</header>

    )
  }
}
