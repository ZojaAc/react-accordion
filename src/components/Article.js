import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOpen: true  // для всех элементов начальное условие
      isOpen: props.defaultOpen  //  привязка к props, чтобы направленно передавать конкретн эл-ту
    }

    this.handleClick = handleClick.bind(this)
  }
  // state = {
  //   isOpen: true
  // }  экспериментальный аналог записи конструктора

  render() {
    const {article} = this.props
    const body = this.state.isOpen && <section className='card-text'>{article.text}</section>
    return (
      <div className='card'>
        <div className='card-header'>
          <h2 className='title2'>
            {article.title}            
          </h2>
          <button className='btn' onClick={this.handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </div>
        <div className='card-body'>
          <h3 className='card-title'>
            creation date: {(new Date(article.date)).toDateString()}
          </h3>
          {body}
        </div>        
      </div>
    )
  }
  // handleClick = () => {
  //   console.log('click')
  // }
}

// function Article(props) {
//   const {article} = props
//   // console.log(props);
//   const body = <section>{article.text}</section>
//   return (
//     <div>
//       <h2>
//         {article.title}
//         <button onClick={handleClick}>close</button>
//       </h2>
//       {body}
//       <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
//     </div>
//   )
// }

function handleClick() {
  // console.log('clicked')  //  проверка работы, выводит в консоль сообщение
  this.setState({
    isOpen: !this.state.isOpen
  })
}

export default Article

// что возвращает консоль props
// {article: {…}}
// article: {id: '56c782f18990ecf954f6e027', date: '2016-06-09T15:03:23.000Z', title: 'React Is Awesome!!!', text: 'React makes it painless to create interactive UIs.…a through your app and keep state out of the DOM.', comments: Array(5)}
// [[Prototype]]: Object