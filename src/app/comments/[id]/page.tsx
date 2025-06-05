type Props = {
    params:{id:string}
}


const CommentPage = async({params}:Props) => {
  const {id} =  await params;
    console.log(id);

    return (
        <div>
comment page content {id}
        </div>
    );
};

export default CommentPage;