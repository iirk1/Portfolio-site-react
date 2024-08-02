const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1 mb40__title">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location </h2>
            <p>Ukraine, Lviv</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:380000000000">+380 000 0000 00</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:irakofut23190@gmail.com">
                irakogut23190@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
