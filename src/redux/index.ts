// Central file for React side app to access all Redux stuff in one place
// export * means to find all named exports from file path and export them from
// this file
// export * as actionCreators means to export all named exports and to rename them
// actionCreators
export * from './store';
export * as actionCreators from './action-creators';
