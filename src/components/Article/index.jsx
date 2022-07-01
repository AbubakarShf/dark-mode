import moment from "moment"
import React from "react"
import "./article.css"
const Article = ({ title, date, length, snippet }) => {
  return (
    <React.Fragment>
      <div className='article'>
        <h4>{title}</h4>
        <h5>{moment(date).format('dddd Do, YYYY')}</h5>
        <p>{length} minute read</p>
        <p>{snippet}</p>
      </div>
    </React.Fragment>
  )
}

export default Article
