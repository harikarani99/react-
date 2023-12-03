let heading = React.createElement(
    'h1', {
        id: 'bg-red'
    },
      'This is react demo'
)

let ele = document.getElementById('root');

let root = ReactDOM.createRoot(ele);

root.render(heading)