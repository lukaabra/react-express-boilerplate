import React from 'react';

class MainApp extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getApiData();
    }

    async getApiData() {
        const res = await fetch('http://localhost:3001/api/data');
        const data = await res.json();

        this.setState(() => ({ data }));
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((elem) => (
                        <h2>{elem}</h2>
                    ))
                }
            </div>
        );
    }
}

export default MainApp;