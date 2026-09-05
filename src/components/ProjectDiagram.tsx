import type { ProjectFlow } from '../assets/data/types'

export default function ProjectDiagram({ flow }: { flow: ProjectFlow }) {
  return (
    <figure className="project-flow">
      <figcaption>{flow.summary}</figcaption>
      <div className="flow-legend"><span className="flow-legend__dot" aria-hidden="true" />파란 영역: 개인 기여<span>회색 영역: 업무·시스템 맥락</span></div>
      <ol className="flow-nodes">
        {flow.nodes.map((node) => (
          <li className="flow-node" key={node.title}>
            <div className="flow-node__context"><h3>{node.title}</h3><p>{node.description}</p></div>
            {node.contribution && <p className="flow-node__contribution"><span className="sr-only">개인 기여: </span>{node.contribution}</p>}
          </li>
        ))}
      </ol>
      <p className="flow-environment"><strong>프로젝트 환경</strong>{flow.environment}</p>
    </figure>
  )
}
