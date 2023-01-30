import { Create_Post } from '../Components/Create_Post/Create_Post';

export const SideBarContainer = () => {
  return (
    <div>
      {/* <img src="../assets/instagram-wordmark.svg" alt="logo" /> */}
      <ul>
        <li>Home</li>
        <li>Search</li>
        <li>Explore</li>
        <li>Reels</li>
        <li>Message</li>
        <li>Notification</li>
        <li>
          <Create_Post />
        </li>
        <li>Profile</li>
        <li>More</li>
      </ul>
    </div>
  );
};
