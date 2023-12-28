export default ({member, onChoice }) => {
  return <button onClick={()=>{
    onChoice(member)
  }}>{member.name}</button>;
};
