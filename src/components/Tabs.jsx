export function Tabs(props) {
  const tabs = ["All", "Open", "Completed"];
  const { todos , selectedTab,setSelectedTab } = props;
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numofTasks =
          tab === "All"
            ? todos.length
            : (tab === "Open"  
            ? todos.filter((tab) => !tab.complete).length
            : todos.filter((tab) => tab.complete).length);
        return (
          <button onClick={() => {setSelectedTab(tab)}}
           key={tabIndex} 
           className={"tab-button"+(tab == selectedTab ? 'tab-selected' : '')}>
            <h4>
              {tab}
              <span>({numofTasks})</span>
            </h4>
          </button>
        );
      })}
    <hr/>
    </nav>
  );
}
