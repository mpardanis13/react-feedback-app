import PropTypes from 'prop-types'

function Card({ children, reverse }) {
	return <div className={reverse ? 'reverse card' : 'card'}>{children}</div>
}

Card.defaultProps = {
	reverse: false,
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
}

export default Card
