import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">Kontak Kami</h4>
                <ul className="contact-info">
                  <li>
                    <span className="contact-info-label">Alamat:</span>PT Mustika Shafwah Sukses, Komplek Ruko Mutiara Faza Blok RA.9, Jl. Condet, Gedong, Pasar Rebo, Kota Adm. Jakarta Timur, DKI Jakarta
                  </li>
                  <li>
                    <span className="contact-info-label">Telepon:</span>
                    <a href="https://api.whatsapp.com/send?phone=6281210799755"> +62 812 1079 9755</a>
                  </li>
                  <li>
                    <span className="contact-info-label">Email:</span>
                    <a href="mailto:mail@example.com">info@suksesumkm.com</a>
                  </li>
                  <li>
                    <span className="contact-info-label">Buka Jam:</span> Senin - Minggu / 9:00 AM - 8:00 PM
                  </li>
                </ul>
                {/* <div className="social-icons">
                  <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook" />
                  <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter" />
                  <a href="#" className="social-icon social-instagram icon-instagram" target="_blank" title="Instagram" />
                </div> */}
                {/* End .social-icons */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-lg-4 */}
            <div className="col-lg-4 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">Pelayanan Pelanggan</h4>
                <ul className="links">
                  <li>
                    <Link href={"/aboutUs"} passHref={true}>
                      <a href="#">Tentang Kami</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/guide"} passHref={true}>
                      <a href="#">Panduan</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/faqBuyer"} passHref={true}>
                      <a href="#">FAQ Pembeli</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/faqSeller"} passHref={true}>
                      <a href="#">FAQ Penjual</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/profile"} passHref={true}>
                      <a href="#">Akun Saya</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/privacy"} passHref={true}>
                      <a href="#">Privasi</a>
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#">Tentang Kami</a>
                  </li> */}
                  <li>
                    <Link href={"/termCondition"} passHref={true}>
                      <a href="term-condition.html">Syarat &amp; Ketentuan</a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-lg-4 */}
            {/* <div className="col-lg-4 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">Popular Tags</h4>
                <div className="tagcloud">
                  <a href="#" style={{ color: "black" }}>
                    Bag
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Black
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Blue
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Clothes
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Fashion
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Hub
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Shirt
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Shoes
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Skirt
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Sports
                  </a>
                  <a href="#" style={{ color: "black" }}>
                    Sweater
                  </a>
                </div>
              </div>
            </div> */}
            {/* End .col-lg-4 */}
            <div className="col-lg-4 col-sm-6">
              <div className="widget widget-newsletter">
                <h4 className="widget-title">Nomor Pengaduan Kementrian Perdagangan</h4>
                <ul className="contact-info">
                  <li>
                    <i class="fas fa-home"> </i> M. I. Ridwan Rais Road, No.5 Jakarta Pusat 10110
                  </li>
                  <li>
                    <i className="fas fa-phone"></i> <a href="tel:620213858171">+62 021 3858171</a>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i> <a href="mailto:contac.us@kemendag.go.id">contac.us@kemendag.go.id</a>
                  </li>
                </ul>
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .footer-middle */}
      <div className="container">
        <div className="footer-bottom">
          <div className="container d-sm-flex align-items-center">
            <div className="footer-left">
              <span className="footer-copyright" style={{ color: "black" }}>
                © Sukses UMKM. 2022. All Rights Reserved
              </span>
            </div>
            <div className="footer-right ml-auto mt-1 mt-sm-0">
              <div className="payment-icons">
                <span className="payment-icon visa" style={{ backgroundImage: "url(/images/payments/mandirilogo.png)", backgroundColor: "transparent", filter: "none" }} />
                <span className="payment-icon visa" style={{ backgroundImage: "url(/images/payments/bnilogo.png)", backgroundColor: "transparent", filter: "none" }} />
                <span className="payment-icon visa" style={{ backgroundImage: "url(/images/payments/brilogo.png)", backgroundColor: "transparent", filter: "none" }} />
                <span className="payment-icon visa" style={{ backgroundImage: "url(/images/payments/btnlogo.png)", backgroundColor: "transparent", filter: "none" }} />
                <span className="payment-icon visa" style={{ backgroundImage: "url(/images/payments/poslogo.png)", backgroundColor: "transparent", filter: "none" }} />
                {/* <span className="payment-icon paypal" style="background-image: url(/images/payments/payment-paypal.svg)"></span>
                          <span className="payment-icon stripe" style="background-image: url(/images/payments/payment-stripe.png)"></span>
                          <span className="payment-icon verisign" style="background-image:  url(/images/payments/payment-verisign.svg)"></span> */}
              </div>
            </div>
          </div>
        </div>
        {/* End .footer-bottom */}
      </div>
      {/* End .container */}
    </footer>
  );
};

export default Footer;
