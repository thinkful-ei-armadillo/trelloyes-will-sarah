import STORE from "./STORE";

function List(props) {
    // use the array of cardsto make an `<div>` for each card
    const customCard = props.cardIds.map(card => {
    //   return <CustomContactLi key={card} />
        return (
            <CustomCardList key={card} />
        )
    });
    
    return (
        <section className="List">
        <header className="header">
          <h2>{STORE.lists.header}</h2>
        </header>

        <div className="cards">
          {customCard}
        </div>
        </section>
    )
  }