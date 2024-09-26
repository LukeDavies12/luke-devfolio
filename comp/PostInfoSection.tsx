interface PostInfoSectionProps {
  children: React.ReactNode;
}

const PostInfoSection: React.FC<PostInfoSectionProps> = ({ children }) => {
  return (
    <div className="my-6 rounded-md bg-neutral-300 p-6 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
      {children}
    </div>
  );
};

export default PostInfoSection;