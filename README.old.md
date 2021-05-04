# tipsy-final-project-frontend
Final Project - front-end


## Tag

<CreatableSelect
      isMulti
      onChange={this.handleChange}
      options={Tag_List}
    />
## Checked box
setSelectedTags(
                  tags.map(selectedTags => {
                    selectedTags.tags = checked;
                    return selectedTags;


<Link to={`/Userprofile/S{user.user_id}`}
## Old code
<BellIcon className="w-6 h-6" aria-hidden="true" />

## Profile image
{/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                onClick={() => logOut()}
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>


## Cor 
from corsheaders.defaults import default_headers
CORS_ALLOW_HEADERS = list(default_headers) + [
    'content-disposition',
]

## PUT request

axios.put(url, file, {
  headers: {
		 Authorization: 'Token ' + token,
    'Content-Type': file.type,
    'Content-Disposition': `attachment; filename=${file.name}`
  }
}).then(res = res.data)

## Userview

class UserViewSet(DjoserUserViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    parser_classes = [FileUploadParser, JSONParser]
    @action(detail=True, methods=['put', 'patch'])
    def photo(self, request, id=None):
        if 'file' not in request.data:
            raise ParseError("Missing file attachment")
        file = request.data['file']
        user = self.get_object()
        user.photo.save(file.name, file, save=True)
        serializer = self.get_serializer(user)
        return Response(serializer.data, status=201)
    def get_object(self):
        user_instance = get_object_or_404(
            self.get_queryset(), pk=self.kwargs["id"])
        if self.request.user.pk != user_instance.pk:
            raise PermissionDenied()
        return user_instance
    def get_parser_classes(self):
        if 'file' in self.request.data:
            return [FileUploadParser]
        return [JSONParser]