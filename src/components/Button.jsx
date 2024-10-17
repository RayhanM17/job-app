const Button = ({type, href, text = 'Read More'}) => {
  let styles = 'block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700';

  if (type === 'indigo') {
    styles = 'h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm';
  } else if (type === 'sm') {
    styles = 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  } else if (type === 'sm-transparent'){
    styles = 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  }

  return (
    <a href={href} className={styles}>
      {text}
    </a>
  )
}

export default Button