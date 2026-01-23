import TimelineCard from '../components/cards/TimelineCard'
import './Story.css'

export default function Story() {
  const timeline = [
    {
      date: 'Tháng 12, 2020',
      title: 'Lần đầu gặp gỡ',
      description: 'Chúng mình tình cờ gặp nhau lần đầu trong một chuyến đi riêng nơi đèo Hải Vân lộng gió. Giữa mây trời và những khúc quanh của núi, chỉ một ánh nhìn thoáng qua cũng đủ làm hai trái tim khẽ run lên, như thể đã nhận ra nhau từ rất lâu rồi.',
      image: '/images/timeline/timeline1.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 2, 2021',
      title: 'Ngày đầu hẹn hò',
      description: 'Lần đầu chàng đến Quy Nhơn để gặp nàng là vào một buổi tối mưa nhẹ. Những hạt mưa rơi khẽ như thì thầm, còn chúng mình sánh bước bên nhau dưới con đường ngập tràn ánh đèn, để mặc thời gian trôi chậm lại, chỉ còn hai trái tim lắng nghe nhịp đập của nhau giữa thành phố biển dịu dàng.',
      image: '/images/timeline/timeline2.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 6, 2021',
      title: 'Gặp gỡ sau khoảng thời gian yêu xa',
      description: 'Sau buổi dạo chơi hôm ấy, chúng mình lại trở về hai nơi xa nhau. Khoảng cách được nối liền bằng những dòng tin nhắn mỗi ngày, từ những lời hỏi thăm giản dị đến những nỗi nhớ lớn dần theo thời gian. Rồi đến một ngày, nàng ra Đà Nẵng chơi, mang theo cả sự mong chờ và rung động, để chúng mình lại được hò hẹn, viết tiếp câu chuyện yêu thương còn dang dở.',
      image: '/images/timeline/timeline3.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 11, 2021',
      title: 'Giữa khoảng cách và hơi ấm tháng mười một',
      description: 'Và rồi, sau bao ngày chờ đợi, mãi đến tận tháng Mười Một chúng mình mới lại có dịp gặp nhau. Trong làn khói nghi ngút của bữa đồ nướng ấm áp, giữa những câu chuyện cười nói thân quen, khoảng cách ngày nào dường như tan biến, chỉ còn lại cảm giác gần gũi và ấm áp như thể chưa từng rời xa.',
      image: '/images/timeline/timeline5.jpg',
      position: 'right'
    },
        {
      date: 'Tháng 1, 2022',
      title: 'Khi khoảng cách dần thu nhỏ',
      description: 'Nửa đầu năm 2022, nàng ra Đà Nẵng làm việc. Từ đó, khoảng cách không còn là những dòng tin nhắn dài nữa, mà là những lần gặp gỡ thường xuyên hơn, nhiều khoảnh khắc bên nhau hơn — những ngày bình dị nhưng đủ đầy, để tình cảm âm thầm lớn lên qua từng ánh nhìn và nụ cười.',
      image: '/images/timeline/timeline8.jpg',
      position: 'left'
    },
    {
      date: 'Nửa đầu năm 2022',
      title: 'Khi hai trái tim không còn khoảng cách',
      description: 'Gặp nhau nhiều hơn, ở bên nhau nhiều hơn, khoảng cách giữa hai ta dần tan biến như chưa từng tồn tại. Tình cảm cứ âm thầm dâng đầy, lan tỏa trong từng khoảnh khắc gần kề, nồng nàn và mãnh liệt đến mức dường như chẳng còn điều gì trên đời có thể ngăn cản được hai trái tim đang cùng nhịp đập, cùng hướng về nhau.',
      image: '/images/timeline/timeline9.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 7, 2022',
      title: 'Một Ngày Đặc Biệt, Một Người Duy Nhất',
      description: 'Ngày chàng tốt nghiệp, giữa khoảnh khắc rực rỡ và thiêng liêng ấy, nàng đứng bên cạnh chàng — người chàng yêu thương nhất đời. Ánh mắt nàng, nụ cười nàng, trở thành điểm tựa dịu dàng trong giây phút trưởng thành quan trọng ấy, khiến khoảnh khắc ấy không chỉ là một dấu mốc của thành công, mà còn là kỷ niệm ngọt ngào khi chàng có nàng ở bên.',
      image: '/images/timeline/timeline7.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 11, 2022',
      title: 'Khi nổi nhớ dẫn lối trở về',
      description: 'Khoảnh khắc chàng lên Đắk Nông làm việc cũng là lúc trái tim buộc phải rời xa nơi nó thuộc về — là nàng. Chúng mình bước vào giai đoạn yêu xa, có lẽ là quãng thời gian khắc nghiệt và cô đơn nhất của cuộc tình. Những cái nắm tay, những ánh mắt, những hơi ấm từng quen thuộc giờ chỉ còn tồn tại trong ký ức, được thay thế bằng những dòng tin nhắn dài trong đêm và những cuộc điện thoại muộn, nơi nỗi nhớ lặng lẽ tràn ra theo từng nhịp thở. Ngày qua ngày, khoảng cách không chỉ đo bằng cây số, mà bằng cả những khoảnh khắc không thể ở bên nhau khi cần nhất. Đến tháng Mười Một, chàng nhận ra mình không thể tiếp tục chịu đựng thêm nữa. Nỗi nhớ nàng đã vượt qua mọi lý trí, kéo chàng trở lại Đà Nẵng — không vì điều gì khác, chỉ vì chàng cần được nhìn thấy nàng, được ở bên nàng, để trái tim mình lại được sống đúng nhịp. Và sau tất cả những xa cách, cuộc gặp gỡ ấy không chỉ hâm nóng lại yêu thương, mà còn khiến tình cảm trở nên sâu đậm hơn bao giờ hết. Chính những thử thách của yêu xa lần thứ hai đã dạy chúng mình cách thấu hiểu, cách trân trọng, và cách yêu nhau bằng một tình yêu chín chắn hơn, bền bỉ hơn — để rồi nhận ra rằng, càng đi qua gian khó, hai trái tim ấy lại càng tìm về gần nhau hơn.',
      image: '/images/timeline/timeline10.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 7, 2023',
      title: 'Giữa Pháo Hoa Rực Rỡ, Anh Chỉ Thấy Em',
      description: 'Sau những ngày tháng xa cách và quãng thời gian dài không được gặp lại, cuối cùng chúng mình cũng có thể đứng cạnh nhau, lặng yên trong lần đầu tiên cùng ngắm pháo hoa rực sáng trên bầu trời. Giữa muôn vàn ánh sáng bừng lên rồi tan vào bầu trời đêm, anh và em khẽ siết tay nhau, chợt hiểu rằng: dù đã đi qua bao chờ đợi và nhớ nhung, chỉ cần được ở bên nhau trong khoảnh khắc đầu tiên ấy, mọi khoảng cách đều trở nên thật nhỏ bé, và yêu thương thì lớn lên hơn bao giờ hết.',
      image: '/images/timeline/timeline23.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 10, 2023',
      title: 'Giữa Gió Nhẹ Và Bình Yên Có Em',
      description: 'Gặp lại nhau giữa nhịp sống chậm rãi, chúng mình cùng dạo bước bên hồ Gia Nghĩa, Đắk Nông. Không ồn ào, không vội vã — chỉ có gió nhẹ, mặt nước yên ả và cảm giác bình yên khi được ở cạnh nhau, như thể mọi mệt mỏi ngoài kia đều tan biến trong khoảnh khắc ấy.',
      image: '/images/timeline/timeline13.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 12, 2023',
      title: 'Đà Nẵng - Gặp Lại Sau Nhớ Mong',
      description: 'Sau những ngày xa cách, chúng mình lại gặp nhau ở Đà Nẵng. Giữa thành phố quen thuộc, chỉ cần được đi bên nhau, lắng nghe từng câu chuyện và nhìn thấy nụ cười ấy, mọi nhớ nhung dường như được ôm trọn. Cuộc gặp gỡ ấy không ồn ào, nhưng đủ để trái tim ấm lên sau bao ngày chờ đợi.',
      image: '/images/timeline/timeline14.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 2, 2024',
      title: 'Đà Nẵng - Yêu Thương Ở Lại',
      description: 'Lại là Đà Nẵng, lại là hai chúng mình, nhưng tình cảm thì đã sâu hơn trước. Những buổi đi chơi giản dị, những khoảnh khắc gần kề khiến yêu thương được hâm nóng — nhẹ nhàng, chậm rãi, và bình yên như cách chúng mình chọn ở bên nhau.',
      image: '/images/timeline/timeline15.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 7, 2024',
      title: 'Sài Gòn - Giữa Phố Đông, Anh Có Em',
      description: 'Giữa Sài Gòn đông đúc và vội vã, chúng mình vẫn tìm thấy nhau. Dạo bước giữa dòng người xa lạ, nhưng chỉ cần có em ở bên, mọi ồn ào bỗng trở nên dịu lại. Một cuộc gặp nữa, một lần yêu thêm sâu, để biết rằng ở bất cứ nơi đâu, chỉ cần có nhau là đủ.',
      image: '/images/timeline/timeline16.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 11, 2024',
      title: 'Ngày Em Đến, Anh Biết Mình Sắp Về',
      description: 'Em lên Đắk Nông thăm anh ngay trước ngày anh trở về quê — một cuộc gặp ngắn ngủi nhưng đủ làm trái tim anh chao đảo. Những ngày có em ở bên vừa ấm áp, vừa khiến anh tiếc nuối, bởi công việc nơi đây vẫn còn dang dở, những dự định từng kéo dài từ đầu năm 2024 đến tận lúc này mới khép lại. Nhưng chính sự hiện diện của em trong những ngày cuối ấy đã khiến anh hiểu ra rằng: dẫu còn bao nhiêu lưu luyến chưa trọn vẹn, trái tim anh vẫn nghiêng về em và gia đình, để rồi nhờ tình yêu dành cho em, anh đủ can đảm khép lại một chặng đường và trở về nơi mình thuộc về.',
      image: '/images/timeline/timeline17.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 2, 2025',
      title: 'Cuối Cùng, Ta Ở Cạnh Nhau',
      description: 'Valentine đầu tiên được ở bên nhau sau bốn năm yêu nhau — một khoảnh khắc mà anh đã chờ đợi suốt rất lâu. Bốn năm của yêu xa, của nhớ nhung giấu trong từng cuộc gọi muộn và từng dòng tin nhắn dài, để rồi hôm nay, lần đầu tiên trong ngày dành riêng cho tình yêu, anh được ở cạnh em thật gần. Khoảnh khắc ấy trở nên thiêng liêng hơn bao giờ hết, bởi không chỉ là một ngày Valentine, mà là minh chứng cho tất cả những chờ đợi, kiên nhẫn và yêu thương mà chúng mình đã cùng nhau đi qua.',
      image: '/images/timeline/timeline18.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 9, 2025',
      title: 'Khi Yêu Thương Lặng Lẽ Trưởng Thành',
      description: 'Chuyến đi Hà Nội ấy, chúng mình vẫn bên nhau trong cương vị của những người đang yêu, nhưng cảm xúc đã trở nên sâu lắng và đầy đặn hơn. Giữa những bước chân chậm rãi trên phố, hai trái tim như cùng ngầm hiểu rằng tình yêu này đã đủ chín để bước tiếp — không ồn ào, không vội vã, chỉ lặng lẽ chuẩn bị cho một chương mới của cuộc đời, nơi yêu thương không chỉ là cảm xúc, mà là sự lựa chọn gắn bó dài lâu của hai chúng ta.',
      image: '/images/timeline/timeline19.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 9, 2025',
      title: 'Ngày Hai Ta Thuộc Về Nhau',
      description: 'Buổi cầu hôn ấy diễn ra trong một không gian chỉ dành riêng cho hai ta — nơi ánh nến lung linh hòa cùng hương hoa dịu nhẹ, và thế giới dường như lặng lại để nhường chỗ cho yêu thương. Giữa khoảnh khắc ấy, chỉ có em, có anh, và những nhịp tim run rẩy khi lời hứa trọn đời được cất lên. Một buổi tối không ồn ào, nhưng đầy lưu luyến, nơi tình yêu được gọi tên bằng sự gắn bó vĩnh viễn, và hai chúng ta chính thức nắm tay nhau bước sang một đời khác.gày chàng tốt nghiệp, giữa khoảnh khắc rực rỡ và thiêng liêng ấy, nàng đứng bên cạnh chàng — người chàng yêu thương nhất đời. Ánh mắt nàng, nụ cười nàng, trở thành điểm tựa dịu dàng trong giây phút trưởng thành quan trọng ấy, khiến khoảnh khắc ấy không chỉ là một dấu mốc của thành công, mà còn là kỷ niệm ngọt ngào khi chàng có nàng ở bên.',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600',
      position: 'left'
    },
    {
      date: 'Tháng 1, 2026',
      title: 'Sau Này Và Mãi Mãi Vẫn Là Em',
      description: 'Bức ảnh cưới này không chỉ ghi lại một khoảnh khắc, mà là điểm dừng lặng lẽ của cả một hành trình dài mà anh và em đã cùng nhau đi qua. Trong ánh nhìn ấy có những năm tháng yêu xa, những lần chờ đợi, những thử thách từng khiến trái tim mỏi mệt, để rồi hôm nay đọng lại thành sự bình yên khi anh biết mình đã tìm đúng người để đi cùng suốt đời. Anh gửi vào bức ảnh này tất cả yêu thương và niềm tin cho tương lai — rằng từ hôm nay và cả những ngày mai sau, dù cuộc sống có đổi thay thế nào, anh vẫn chọn ở bên em, nắm tay em thật chặt, cùng em xây dựng một mái nhà đầy ắp yêu thương, nơi chúng ta già đi bên nhau trong bình yên và hạnh phúc.',
      image: '/images/timeline/timeline24.jpg',
      position: 'right'
    },

  ]

  return (
    <div className="story-page">
      <section className="story-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Our Journey</p>
            <h2>Love Story Timeline</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="timeline-section section">
        <div className="container">
          <div className="timeline">
            {timeline.map((event, index) => (
              <TimelineCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="love-quote section">
        <div className="container">
          <blockquote>
            "Where there is love, there is life."
            <footer>— Mahatma Gandhi</footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
