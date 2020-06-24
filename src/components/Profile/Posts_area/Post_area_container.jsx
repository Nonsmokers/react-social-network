import Posts_area from './Posts_area';
import { add_post_action_creator, update_post_action_creator } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return ({
    posts: state.profile_page.posts,
    new_post: state.profile_page.new_post,
  });
}
let mapDispatchToProps = (dispatch) => {
  return {
    add_post: () => {
      dispatch(add_post_action_creator())
    },
    update_post: (new_text) => {
      dispatch(update_post_action_creator(new_text))
    }
  }
}

const Posts_area_container = connect(mapStateToProps, mapDispatchToProps)(Posts_area);

export default Posts_area_container;