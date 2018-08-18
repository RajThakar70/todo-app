import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import { VisibilityFilters, setVisibilityFilter } from '../actions';

const Filter = ({ currentFilter, dispatch }) => {
	return (
		<div>
			{Object.keys(VisibilityFilters).map((filter,index) => (
				<FormControlLabel
          key={index}
					value={filter}
					control={<Radio onChange={(event) =>
						{
              dispatch(setVisibilityFilter(event.target.value))
            }
					} checked={currentFilter === filter} />}
					label={filter}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({ currentFilter: state.visibilityFilter });

export default connect(mapStateToProps)(Filter);
