import ContentLoader from 'react-content-loader';

const SearchLoader = () => (
      <ContentLoader
      speed={2}
      width={320}
      height={320}
      viewBox="0 0 320 220"
      backgroundColor="#f3f3f3"
      foregroundColor="#acabab"
    >
      <rect x="0" y="0" rx="2" ry="2" width="320" height="320" />
    </ContentLoader>
);

export default SearchLoader;
