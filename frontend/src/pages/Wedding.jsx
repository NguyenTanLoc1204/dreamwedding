import './Wedding.css'

export default function Wedding() {
  const weddingInfo = {
    ceremony: {
      title: 'Lễ Đính Hôn',
      date: '17/01/2026',
      time: '9:00',
      venue: 'Nhà Gái',
      address: '1051 Hùng Vương, Quy Nhơn Bắc, Gia Lai',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.280542630509!2d108.5875447!3d15.4531394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169c5000ec26bbf%3A0x5014de4179b24a2f!2zTmjDoCB24INuIGjDs2EgdGjDtG4gQsOsbmggQW4!5e0!3m2!1svi!2s!4v1737350000000'
    },
    reception: {
      title: 'Lễ Cưới',
      date: '24/01/2026',
      time: '9:00',
      venue: 'Nhà Trai',
      address: 'Thôn Bình An, Xã Tam Anh, TP. Đà Nẵng'
    }
  }

  return (
    <div className="wedding-page">
      <section className="wedding-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">When & Where</p>
            <h2>Wedding Details</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="wedding-info-section section">
        <div className="container">
          <div className="wedding-cards">
            <div className="wedding-card">
              <div className="wedding-icon">💒</div>
              <h3>{weddingInfo.ceremony.title}</h3>
              <div className="wedding-details">
                <p><strong>📅 Ngày:</strong> {weddingInfo.ceremony.date}</p>
                <p><strong>🕐 Giờ:</strong> {weddingInfo.ceremony.time}</p>
                <p><strong>📍 Địa điểm:</strong> {weddingInfo.ceremony.venue}</p>
                <p>{weddingInfo.ceremony.address}</p>
              </div>
            </div>

            <div className="wedding-card">
              <div className="wedding-icon">🎉</div>
              <h3>{weddingInfo.reception.title}</h3>
              <div className="wedding-details">
                <p><strong>📅 Ngày:</strong> {weddingInfo.reception.date}</p>
                <p><strong>🕐 Giờ:</strong> {weddingInfo.reception.time}</p>
                <p><strong>📍 Địa điểm:</strong> {weddingInfo.reception.venue}</p>
                <p>{weddingInfo.reception.address}</p>
              </div>
            </div>
          </div>

          <div className="wedding-map">
            <h3>Bản đồ đường đi</h3>
            <div className="map-container">
              <iframe
                src={weddingInfo.ceremony.map}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}