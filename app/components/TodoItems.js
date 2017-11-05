var React = require('react');

class TodoItems extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(items){
    return <li key={items.key}>{items.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return(
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}

module.exports = {
  TodoItems: TodoItems
}
