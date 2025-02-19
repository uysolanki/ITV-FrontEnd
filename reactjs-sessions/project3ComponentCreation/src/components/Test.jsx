import React from 'react'

const Test = () => {
    const user = { name: 'John' };
    const user1 = {};
    const user2 = null;
    const user3 = undefined
    
    
    return (
      <div>
        {/* Only render this if user is logged in */}
        {user1 && <h1>Welcome, {user1.name}!</h1>}
      </div>
    );
}

export default Test

