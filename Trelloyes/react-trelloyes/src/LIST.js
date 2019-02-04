function List(props) {
    // use the array of cardsto make an `<div>` for each card
    const customLis = props.contacts.map(function(contact) {
      return <CustomContactLi key={contact} />
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