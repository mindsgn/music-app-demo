interface PlayerInterface {
  signedIn: boolean;
  connectionType: 'gmail' | 'wallet-connect' | null;
}

const initialState: PlayerInterface = {
  signedIn: false,
  connectionType: null,
};

const User = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default User;
