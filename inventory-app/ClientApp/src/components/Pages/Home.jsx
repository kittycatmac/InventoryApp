import React from 'react';

const Home = ({user}) => {
    // {user?.DisplayName}
    return (
      <div className="App center">
        <header className="App-header">
                <h3>Welcome Inventory</h3>
        </header>
          <p>Use Sheet Material Inventory to make adjustments to inventory numbers which then are sent to JMS.</p>
          <p>You must me be logged in to navigate to any page but here (Home) and Login.</p>
          <p>Use the light and dark toggle above, to change the application dark and light theme.</p>
          <p>Use the Support page to get documentation.</p>
      </div>
    );
}

export default Home;