function List(props) {
    // use the array of cardsto make an `<div>` for each card
    const customLis = props.cards.map(card => {
    //   return <CustomContactLi key={card} />
        return (
            
        )

    });
    
    
    return (
        <section className="List">
        <header className="header">
          <h2>First list</h2>
        </header>
        <div className="cards">
          <div className="Card">
            <h3>First card</h3>
            <p>lorem ipsum</p>
          </div>
          </div>
          </section>

    )
  }