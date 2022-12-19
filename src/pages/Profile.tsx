import { User } from '@/models/User';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export function Profile() {
  document.title = 'Profile';

  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  function updateUser(event: React.SyntheticEvent) {
    event.preventDefault();
    const query = useQuery({ queryKey: ['user'], queryFn: () => {} });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl">Profile</h1>
      <p className="text-2xl">{user.name}</p>
      <p className="text-2xl">{user.email}</p>
      <Box component="form" onSubmit={updateUser}></Box>
    </div>
  );
}
