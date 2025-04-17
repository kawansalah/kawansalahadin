import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "react-hot-toast";
import { Pencil, Trash2, UserPlus } from "lucide-react";

// Mock data for testing
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User' },
];

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      // Try to fetch from API
      // const response = await fetch('/api/users');
      
      // Check if the response is ok
      // if (response.ok) {
      //   const data = await response.json();
      //   setUsers(data);
      // } else {
        // If API fails, use mock data
        console.warn('API unavailable, using mock data');
        setUsers(mockUsers);
      // }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to fetch users, using sample data');
      // Use mock data if API fails
      setUsers(mockUsers);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (userId) => {
    try {
      // In a real app, this would delete from the API
      // await fetch(`/api/users/${userId}`, {
      //   method: 'DELETE',
      // });
      
      // For now, just remove from local state
      setUsers(users.filter(user => user.id !== userId));
      toast.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        // Update existing user in local state
        setUsers(users.map(user => 
          user.id === editingUser.id ? { ...user, ...formData } : user
        ));
      } else {
        // Add new user to local state
        const newUser = {
          id: Date.now(), // Generate a temporary ID
          ...formData
        };
        setUsers([...users, newUser]);
      }

      toast.success(`User ${editingUser ? 'updated' : 'created'} successfully`);
      setIsDialogOpen(false);
      setFormData({ name: '', email: '', role: '' });
      setEditingUser(null);
    } catch (error) {
      console.error('Error saving user:', error);
      toast.error(`Failed to ${editingUser ? 'update' : 'create'} user`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6 w-full min-h-screen">
      <Card className="p-6 bg-[#121212] border-[#333] text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Users Management</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                onClick={() => {
                  setEditingUser(null);
                  setFormData({ name: '', email: '', role: '' });
                }}
                className="bg-[#333] hover:bg-[#444] text-white"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1E1E1E] border-[#333] text-white">
              <DialogHeader>
                <DialogTitle className="text-white text-xl">{editingUser ? 'Edit User' : 'Add User'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-200">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-200">Role</Label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#333] hover:bg-[#444] text-white mt-6"
                >
                  {editingUser ? 'Update' : 'Create'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-md border border-[#333] overflow-hidden">
          <Table>
            <TableHeader className="bg-[#222]">
              <TableRow className="hover:bg-[#333] border-b border-[#333]">
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Role</TableHead>
                <TableHead className="text-white text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10 text-white">
                    Loading users...
                  </TableCell>
                </TableRow>
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10 text-white">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id} className="hover:bg-[#333] border-b border-[#333]">
                    <TableCell className="text-white">{user.name}</TableCell>
                    <TableCell className="text-white">{user.email}</TableCell>
                    <TableCell className="text-white">{user.role}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEdit(user)}
                          className="border-[#444] bg-transparent hover:bg-[#333] text-white"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDelete(user.id)}
                          className="border-[#444] bg-transparent hover:bg-[#500] text-white hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default UsersManagement;