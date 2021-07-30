import { combineReducers,AnyAction } from 'redux';

// import { registration } from './registration.reducer';
// import { user } from './user.reducer';
// import { alert } from './alert.reducer';
// import { dashboard } from './dashboard.reducer';
// import { bbsAnnounce } from './bbs.announce.reducer';
// import { bbsMealTable } from './bbs.mealtable.reducer';
// import { bbsAlbum } from './bbs.album.reducer';
// import { bbsMedicine } from './bbs.medicine.reducer';
// import { bbsHomecome } from './bbs.homecome.reducer';
// import { schoolnote } from './schoolnote.reducer';

const rootReducer = combineReducers({

    // registration,
    // user,
    // alert,
    // dashboard,
    // bbsAnnounce,
    // bbsMealTable,
    // bbsAlbum,
    // bbsMedicine,
    // bbsHomecome,
    // schoolnote
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;