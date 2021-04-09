  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const Header = (title, date, temp) => {

    const headerDisplay = document.createElement('div');
    headerDisplay.classList.add('header');

    const dateDisplay = document.createElement('span');
    dateDisplay.classList.add('date');
    headerDisplay.appendChild(dateDisplay);
    dateDisplay.textContent = date;

    const titleDisplay = document.createElement('h1');
    headerDisplay.appendChild(titleDisplay);
    titleDisplay.textContent = title;

    const tempDisplay = document.createElement('span');
    tempDisplay.classList.add('temp');
    headerDisplay.appendChild(tempDisplay);
    tempDisplay.textContent = temp;

    return headerDisplay;
    
}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const headerAppender = (selector) => {

}

export { Header, headerAppender }
