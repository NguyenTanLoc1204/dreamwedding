import { useState, useEffect } from 'react'
import './Blog.css'

// DỮ LIỆU MẪU (Thay link YouTube của bạn vào đây)
const sampleVideos = [
  {
    _id: 1,
    title: "",
    // Link YouTube dạng Embed.
    // Lưu ý đuôi ?rel=0 để khi hết video nó không gợi ý video lung tung của người khác
    embedUrl: "https://www.youtube.com/embed/Cbo06rPaSnI?rel=0", 
    publishedAt: "2026-1-24",
    description: "Đây không chỉ là một đoạn video,mà là những lời tâm sự em gửi anh — ghi lại hành trình yêu thương của chúng mình, từ những ngày xa cách, những lần chờ đợi, đến khoảnh khắc hôm nay khi em và anh cùng đứng cạnh nhau trong ngày trọng đại. Mỗi khung hình là một kỷ niệm, mỗi giây phút là một điều em muốn nói: cảm ơn anh đã ở lại, đã kiên nhẫn, đã cùng em đi qua tất cả để có “chúng ta” của hôm nay.",
    author: "From the Bride, to the Groom"
  }
]

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function VideoGallery() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(sampleVideos)
  }, [])

  return (
    <div className="blog-page">
      <section className="blog-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Memorable Moments</p>
            <h2>Wedding Films</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="blog-list section">
        <div className="container blog-container-classic">
          <div className="blog-stream">
            {videos.map(video => (
              <article key={video._id} className="blog-classic-item">
                
                {/* KHUNG CHỨA VIDEO YOUTUBE (Responsive) */}
                <div className="blog-media video-responsive">
                  <iframe 
                    src={video.embedUrl} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>

                {/* NỘI DUNG CHỮ */}
                <div className="blog-body">
                  <div className="blog-date">
                    {formatDate(video.publishedAt)}
                  </div>

                  <h3 className="blog-title">
                    {video.title}
                  </h3>

                  <div className="blog-meta-info">
                    <span> {video.author}</span>
                    <span className="sep">/</span>
                    {/* <span>Video Diary</span> */}
                  </div>

                  <p className="blog-excerpt">{video.description}</p>
                </div>

                <div className="blog-divider-bottom">
                  <span className="icon-leaf">❦</span>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="love-quote section">
        <div className="container">
          <blockquote>
            "Forever is not a word, it’s a promise we choose every day.”"
            <footer>— NguyenTanLoc</footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}