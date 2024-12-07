import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
           <div className="navigationbox-nav-box">Description</div>
           <div className="navigationbox-nav-box fade">Reviews (125)</div>
      </div>

        <div className="descriptionbox-description">
            <p>
            An online web store is a modern digital platform that provides customers with the convenience of shopping for products and services from the comfort of their homes. It offers a wide range of features, including user-friendly navigation, advanced search options, and filters to help customers find exactly what they need. Secure payment gateways ensure safe and hassle-free transactions, while order tracking keeps users updated on their purchases. Many online stores also provide personalized recommendations based on customer preferences, enhancing the shopping experience. Additional facilities like customer reviews, live chat support, multiple language options, and detailed product descriptions make the platform reliable and user-centric. With 24/7 accessibility, an online web store brings a seamless, efficient, and engaging shopping experience to users worldwide.</p>
        </div>

    </div>
  )
}

export default DescriptionBox