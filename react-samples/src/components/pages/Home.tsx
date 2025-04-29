import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faCog,
  faPuzzlePiece,
  faRocket,
  faList,
  faLaptop,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

// Import StyledComponentsExample
import StyledComponentsExample from '../../components/StyledComponentsExample'

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
                <a
                  href={item.path}
                  className="block text-indigo-600 hover:text-indigo-900 hover:bg-gray-50 -m-2 p-2 rounded flex items-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-xs" />
                  {item.name}
                </a>
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
      {/* Add the StyledComponentsExample at the top of the main content */}
      <StyledComponentsExample />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* React Fundamentals */}
        <CategoryCard
          icon={faCode}
          title="React Fundamentals"
          description="Components, props, state, and lifecycle methods"
          items={[
            { name: "Component Types", path: "/components/types" },
            { name: "Props & State", path: "/components/props-state" },
            { name: "Conditional Rendering", path: "/components/conditional-rendering" },
            { name: "Lists & Keys", path: "/components/lists-keys" },
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

        {/* React Patterns */}
        <CategoryCard
          icon={faPuzzlePiece}
          title="React Patterns"
          description="Common patterns used in React applications"
          items={[
            { name: "Render Props", path: "/patterns/render-props" },
            { name: "HOC (Higher Order Components)", path: "/patterns/hoc" },
            { name: "Compound Components", path: "/patterns/compound-components" },
            { name: "Context + Reducer", path: "/patterns/context-reducer" },
          ]}
        />

        {/* Performance Optimization */}
        <CategoryCard
          icon={faRocket}
          title="Performance Optimization"
          description="Techniques to optimize React performance"
          items={[
            { name: "Memoization", path: "/performance/memoization" },
            { name: "Code Splitting", path: "/performance/code-splitting" },
            { name: "Virtualization", path: "/performance/virtualization" },
            { name: "React.memo", path: "/performance/react-memo" },
          ]}
        />

        {/* Form Handling */}
        <CategoryCard
          icon={faList}
          title="Form Handling"
          description="Best practices for forms in React"
          items={[
            { name: "Controlled Components", path: "/forms/controlled-components" },
            { name: "Form Validation", path: "/forms/validation" },
            { name: "Custom Form Hooks", path: "/forms/custom-hooks" },
          ]}
        />

        {/* Interview Challenges */}
        <CategoryCard
          icon={faLaptop}
          title="Interview Challenges"
          description="Common coding challenges from React interviews"
          items={[
            { name: "To-Do List", path: "/challenges/todo-list" },
            { name: "Infinite Scroll", path: "/challenges/infinite-scroll" },
            { name: "Debounced Search", path: "/challenges/debounced-search" },
            { name: "Modal Dialog", path: "/challenges/modal-dialog" },
          ]}
        />
      </div>
    </main>
  )
}

export default Home;