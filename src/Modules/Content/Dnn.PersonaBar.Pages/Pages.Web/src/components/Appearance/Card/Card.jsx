import React, {Component, PropTypes} from "react";
import OverflowText from "dnn-text-overflow-wrapper";
import GridCell from "dnn-grid-cell";
import styles from "./style.less";

class Card extends Component {

    onClick() {
        this.props.onClick(this.props.cardId);
    }

    getNoImageIcon() {
        return <svg version="1.1" x="0px" y="0px" viewBox="0 0 2048 2048">
                        <g>
                            <rect x="255.2" y="254.3" width="480.1" height="523.2"/>
                            <rect x="875.8" y="589.7" width="917" height="187.8"/>
                            <rect x="255.2" y="905.9" width="1537.6" height="883.1"/>
                            <rect x="875.8" y="254.3" width="917" height="187.8"/>
                        </g>
                    </svg>;
    }

    getImageComponent() {
        const {image } = this.props;
        const className = "card-image" + (image ? "" : " no-image");

        return <span className={className} onClick={this.onClick.bind(this)} >
                {image ? <img src={image} /> : this.getNoImageIcon()}
            </span>;
    }
    
    render() {
        const { selected } = this.props;
        const className = styles.moduleContainer + (selected ? " selected" : "");
        return (
            <GridCell columnSize="25" className={className}>
                {this.getImageComponent()}
                <OverflowText text={this.props.label} maxWidth={168} className="title" />
            </GridCell>
        );
    }
}

Card.propTypes = {
    cardId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    hoverText: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    image: PropTypes.string,
    selected: PropTypes.bool.isRequired
};

export default Card;