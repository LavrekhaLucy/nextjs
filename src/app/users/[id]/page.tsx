type Props = {
    params:{id:string}
}


const UserPage = async({params}:Props) => {
  const {id} = params;
    console.log(id);

    return (
        <div>
user page content {id}
        </div>
    );
};

export default UserPage;