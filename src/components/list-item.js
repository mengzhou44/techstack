import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CardSection from './common/card-section';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { description } = this.props.library;

        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }} >{description}</Text>
                </CardSection>);
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <View>
                            <Text style={titleStyle} > {title} </Text>
                        </View>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>

        );
    }
}


const styles = {
    titleStyle: {
        paddingLeft: 15,
        fontSize: 18
    }
};

function mapStateToProps(state, ownProps) {
    if (!state.selected) {
        return {
            expanded: false
        };
    }

    const expanded = state.selected.id === ownProps.library.id;
    return {
        expanded
    };
}


export default connect(mapStateToProps, actions)(ListItem);

