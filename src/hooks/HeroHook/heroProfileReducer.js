export const HERO_PROFILE_REDUCER = (state, action) => {
    switch (action.type) {
      case 'CHANGE_HERO_PROFILE':
        return {...state, heroId: action.heroId, heroProfileData: action.heroProfile};
      default:
            throw new Error();
    }
};
