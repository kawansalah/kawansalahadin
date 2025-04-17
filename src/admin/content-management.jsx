import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "react-hot-toast";
import { PlusCircle, Pencil, Trash2, Image as ImageIcon, X } from "lucide-react";

// Demo data for testing
const mockProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A modern e-commerce platform with advanced features",
    category: "Web Development",
    images: [
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
    ],
    status: "published",
    date: "2024-03-15",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure and user-friendly banking application",
    category: "Mobile Development",
    images: [
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
    ],
    status: "draft",
    date: "2024-04-01",
    tags: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description: "Complete brand identity package for a startup",
    category: "Graphic Design",
    images: [
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
    ],
    status: "published",
    date: "2024-02-20",
    tags: ["Logo Design", "Brand Guidelines", "Social Media"]
  },
  {
    id: 4,
    title: "Content Marketing Strategy",
    description: "Comprehensive content strategy for tech company",
    category: "Digital Marketing",
    images: [
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
    ],
    status: "archived",
    date: "2023-12-10",
    tags: ["SEO", "Content Planning", "Social Media"]
  }
];

export default function ContentManagement() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    category: "",
    images: [],
    status: "draft",
    date: new Date().toISOString().split('T')[0],
    tags: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const predefinedCategories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Graphic Design",
    "Digital Marketing",
    "Content Writing"
  ];

  useEffect(() => {
    setCategories(predefinedCategories);
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      // Try to fetch from API
      // const response = await fetch('/api/projects');
      
      // Check if the response is ok
      // if (response.ok) {
      //   const data = await response.json();
      //   setProjects(data);
      // } else {
        // If API fails, use mock data
        console.warn('API unavailable, using mock data');
        setProjects(mockProjects);
      // }
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to fetch projects, using sample data');
      // Use mock data if API fails
      setProjects(mockProjects);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      // const url = isEditing 
      //   ? `/api/projects/${currentProject.id}`
      //   : "/api/projects";
      // const method = isEditing ? "PUT" : "POST";

      // const response = await fetch(url, {
      //   method,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(currentProject),
      // });

      // if (response.ok) {
        if (isEditing) {
          // Update existing project in local state
          setProjects(projects.map(project => 
            project.id === currentProject.id ? { ...project, ...currentProject } : project
          ));
        } else {
          // Add new project to local state
          const newProject = {
            id: Date.now(), // Generate a temporary ID
            ...currentProject
          };
          setProjects([...projects, newProject]);
        }

        toast.success(`Project ${isEditing ? 'updated' : 'created'} successfully`);
        setIsDialogOpen(false);
        setCurrentProject({
          title: "",
          description: "",
          category: "",
          images: [],
          status: "draft",
          date: new Date().toISOString().split('T')[0],
          tags: [],
        });
        setIsEditing(false);
      // } else {
      //   throw new Error(`Failed to ${isEditing ? 'update' : 'save'} project`);
      // }
    } catch (error) {
      toast.error(`Failed to ${isEditing ? 'update' : 'save'} project`);
      console.error("Error saving project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (projectId) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      setIsLoading(true);
      // In a real app, this would delete from the API
      // await fetch(`/api/projects/${projectId}`, {
      //   method: "DELETE",
      // });
      
      // For now, just remove from local state
      setProjects(projects.filter(project => project.id !== projectId));
      toast.success('Project deleted successfully');
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error('Failed to delete project');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (project) => {
    setCurrentProject(project);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleAddTag = () => {
    if (newTag && !currentProject.tags.includes(newTag)) {
      setCurrentProject({ ...currentProject, tags: [...currentProject.tags, newTag] });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setCurrentProject({
      ...currentProject,
      tags: currentProject.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleAddImage = () => {
    if (imageUrl && !currentProject.images.includes(imageUrl)) {
      setCurrentProject({
        ...currentProject,
        images: [...currentProject.images, imageUrl]
      });
      setImageUrl("");
    }
  };

  const handleRemoveImage = (imageToRemove) => {
    setCurrentProject({
      ...currentProject,
      images: currentProject.images.filter((image) => image !== imageToRemove)
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "draft":
        return "bg-yellow-500/10 text-yellow-500";
      case "published":
        return "bg-green-500/10 text-green-500";
      case "archived":
        return "bg-gray-500/10 text-gray-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="p-6 w-full min-h-screen">
      <Card className="p-6 bg-[#121212] border-[#333] text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Project Management</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                onClick={() => {
                  setCurrentProject({
                    title: "",
                    description: "",
                    category: "",
                    images: [],
                    status: "draft",
                    date: new Date().toISOString().split('T')[0],
                    tags: [],
                  });
                  setIsEditing(false);
                }}
                className="bg-[#333] hover:bg-[#444] text-white gap-2"
              >
                <PlusCircle className="h-4 w-4" />
                Add New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1E1E1E] border-[#333] text-white">
              <DialogHeader>
                <DialogTitle className="text-white text-xl">{isEditing ? 'Edit Project' : 'Add New Project'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-200">Project Title</Label>
                  <Input
                    id="title"
                    value={currentProject.title}
                    onChange={(e) =>
                      setCurrentProject({ ...currentProject, title: e.target.value })
                    }
                    placeholder="Enter project title"
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-200">Project Description</Label>
                  <Textarea
                    id="description"
                    value={currentProject.description}
                    onChange={(e) =>
                      setCurrentProject({ ...currentProject, description: e.target.value })
                    }
                    placeholder="Enter project description"
                    rows={4}
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-200">Category</Label>
                  <Select
                    value={currentProject.category}
                    onValueChange={(value) =>
                      setCurrentProject({ ...currentProject, category: value })
                    }
                  >
                    <SelectTrigger className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#222] border-[#444] text-white">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-gray-200">Project Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={currentProject.date}
                    onChange={(e) =>
                      setCurrentProject({ ...currentProject, date: e.target.value })
                    }
                    className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status" className="text-gray-200">Status</Label>
                  <Select
                    value={currentProject.status}
                    onValueChange={(value) =>
                      setCurrentProject({ ...currentProject, status: value })
                    }
                  >
                    <SelectTrigger className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#222] border-[#444] text-white">
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-200">Project Images</Label>
                  <div className="flex gap-2">
                    <Input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Enter image URL"
                      className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                    />
                    <Button 
                      onClick={handleAddImage}
                      className="bg-[#333] hover:bg-[#444] text-white"
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Add Image
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {currentProject.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Project image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleRemoveImage(image)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-200">Tags</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                      className="bg-[#222] border-[#444] text-white focus:border-[#666] focus:ring-[#666]"
                    />
                    <Button onClick={handleAddTag} className="bg-[#333] hover:bg-[#444] text-white">Add</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer hover:bg-destructive/10 bg-[#333] text-white"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    className="border-[#444] bg-transparent hover:bg-[#333] text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="bg-[#333] hover:bg-[#444] text-white"
                  >
                    {isLoading ? "Saving..." : isEditing ? "Update Project" : "Save Project"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-md border border-[#333] overflow-hidden">
          <Table>
            <TableHeader className="bg-[#222]">
              <TableRow className="hover:bg-[#333] border-b border-[#333]">
                <TableHead className="text-white">Title</TableHead>
                <TableHead className="text-white">Category</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Images</TableHead>
                <TableHead className="text-white">Tags</TableHead>
                <TableHead className="text-white text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10 text-white">
                    Loading projects...
                  </TableCell>
                </TableRow>
              ) : projects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10 text-white">
                    No projects found
                  </TableCell>
                </TableRow>
              ) : (
                projects.map((project) => (
                  <TableRow key={project.id} className="hover:bg-[#333] border-b border-[#333]">
                    <TableCell className="text-white">{project.title}</TableCell>
                    <TableCell className="text-white">{project.category}</TableCell>
                    <TableCell className="text-white">{new Date(project.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {project.images.slice(0, 3).map((image, index) => (
                          <div key={index} className="relative w-8 h-8">
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover rounded"
                            />
                            {index === 2 && project.images.length > 3 && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                                <span className="text-xs text-white">+{project.images.length - 3}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-[#333] text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEdit(project)}
                          className="border-[#444] bg-transparent hover:bg-[#333] text-white"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDelete(project.id)}
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
} 