function Card(props) {
    console.log(`Card is running somewhere.`)
    return (
      <span className='title'>
      
        <div className="Card">
        <h3>First card</h3>
            <span className='content'>
             {props.children}
            <p>lorem ipsum</p>
            </span>
        </div>
      </span>
    )
  }