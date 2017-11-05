var React = require('react');

class TodoItems extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(key){
    this.props.delete(key);
  }

  createTasks(items){
    return <li onClick={(e) => this.delete(items.key, e)}
            key={items.key}>{items.text}</li>
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
