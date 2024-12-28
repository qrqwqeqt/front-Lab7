import React, { Component } from 'react';

class Content extends Component {
    state = {
        hobbiesColor: false,
        listColor: false
    };

    toggleHobbiesColor = () => {
        this.setState(prevState => ({
            hobbiesColor: !prevState.hobbiesColor
        }));
    };

    toggleListColor = () => {
        this.setState(prevState => ({
            listColor: !prevState.listColor
        }));
    };

    render() {
        const hobbiesStyle = {
            backgroundColor: this.state.hobbiesColor ? "yellow" : "transparent",
            color: this.state.hobbiesColor ? "black" : "inherit"
        };

        const listStyle = {
            backgroundColor: this.state.listColor ? "black" : "transparent",
            color: this.state.listColor ? "white" : "inherit"
        };

        return (
            <div className="content">
                <h3>
                    <div onClick={this.toggleHobbiesColor} style={hobbiesStyle}>Хоббі</div>
                </h3>
                <ul>
                    <div onClick={this.toggleListColor} style={listStyle}>
                        <li>Хобіхорсінг</li>
                        <li>Гітара</li>
                        <li>Дота 2</li>
                    </div>
                </ul>

                <h3>Фільми</h3>
                <ol>
                    <li>Бойцовский клуб</li>
                    <li>Горбатая гора</li>
                    <li>Зеленый слоник</li>
                </ol>

                <h3>Моє улюблене місто</h3>
                <p>Моє улюблене місто - Берлін. Це місто вражає своєю історією, культурними пам'ятками і сучасною архітектурою. Тут є багато музеїв, парків та місць для відпочинку. Берлін завжди надихає на нові ідеї та відкриття.</p>
            </div>
        );
    }
}

export default Content;