import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faCode,
  faCog,
  faPuzzlePiece,
  faRocket,
  faList,
  faLaptop,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

interface CategoryCardProps {
  icon: any;
  title: string;
  description: string;
  items: { name: string; path: string; }[];
}

function CategoryCard({ icon, title, description, items }: CategoryCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center mb-3">
          <FontAwesomeIcon icon={icon} className="text-indigo-500 mr-2 text-xl" />
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        </div>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{description}</p>
        </div>
        <div className="mt-5">
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.path} className="py-2">
                <Link
                  to={item.path}
                  className="block text-indigo-600 hover:text-indigo-900 hover:bg-gray-50 -m-2 p-2 rounded flex items-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-xs" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chapter 2 Examples */}
        <CategoryCard
          icon={faCode}
          title="Chapter 2 Examples"
          description="Collection of Chapter 2 example components and styling demos"
          items={[
            { name: "Blog Post Example", path: "/ch2/blog-post" },
            { name: "CSS Specificity", path: "/ch2/css-specificity" },
            { name: "Styled Components", path: "/ch2/styled-components" },
            { name: "Forms (Simple & Advanced)", path: "/ch2/forms" },
            { name: "Timer", path: "/ch2/timer" },
            { name: "Drag and Drop", path: "/ch2/drag-and-drop" },
            { name: "YouTube API Example", path: "/ch2/youtube-api" },
          ]}
        />

        {/* React Fundamentals */}
        <CategoryCard
          icon={faCode}
          title="React Fundamentals"
          description="Components, props, state, and lifecycle methods"
          items={[
            { name: "Component Types", path: "/fundamentals/types" },
            { name: "Props & State", path: "/fundamentals/props-state" },
            { name: "Conditional Rendering", path: "/fundamentals/conditional-rendering" },
            { name: "Lists & Keys", path: "/fundamentals/lists-keys" },
          ]}
        />

        {/* React Hooks */}
        <CategoryCard
          icon={faCog}
          title="React Hooks"
          description="Explore React's built-in hooks and custom hook patterns"
          items={[
            { name: "useState", path: "/hooks/use-state" },
            { name: "useEffect", path: "/hooks/use-effect" },
            { name: "useContext", path: "/hooks/use-context" },
            { name: "useMemo & useCallback", path: "/hooks/use-memo-callback" },
            { name: "Custom Hooks", path: "/hooks/custom-hooks" },
          ]}
        />


      </div>
    </main>
  )
}

export default Home;