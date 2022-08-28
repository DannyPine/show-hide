class Message extends React.Component {
  state = {
    isMessageActive: false,
  };

  handleActive = () => {
    this.setState({
      isMessageActive: !this.state.isMessageActive,
    });
  };

  render() {
    const text =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam explicabo delectus in saepe ad non enim libero qui neque, cumque minus animi sapiente repudiandae sunt, quia sint laudantium magni!';
    return (
      <>
        <button onClick={this.handleActive}>
          {this.state.isMessageActive ? 'Hide' : 'Show'}
        </button>
        {this.state.isMessageActive ? <p>{text}</p> : null}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById('root'));
