type Props = {
    params:{id:string}
}


const PostPage = async({params}:Props) => {
  const {id} = await params;
    console.log(id);

    return (
        <div>
post page content {id}
        </div>
    );
};

export default PostPage;