'use strict';
const React = require('react');
const Ons = require('react-onsenui');

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    // Render the dashboard
    render() {
        return (
            <Ons.Page>
                <Ons.Row height="100%">
                    <Ons.Col verticalAlign="center">
                        <h1 style={{textAlign: "center"}}>GeoFreebie</h1>
                        <p style={{textAlign: "center"}}>
                            <Ons.Button onClick={this.props.login}>Log in</Ons.Button>
                        </p>
                    </Ons.Col>
                </Ons.Row>
            </Ons.Page>
        )
    }
}

module.exports = {
    Dashboard: Dashboard
}
