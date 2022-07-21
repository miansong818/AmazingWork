/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/**
 * given n numbers of courses, and prerequisites [a, b]
 * courses schedule issue, prerequisites [a, b] means b need to finished before start a.
 * check if given courses structure can be done or not.
 * which we need to find the circle in the graph
 * e.g []
 *
*/

const dfs=(graph, vertex, path, order, visited)=>{
  /**
     * use dfs to reslove this issue
     *
    */
  // path.append(vertex);
  // for neighbor in graph[vertex]:
  //     if neighbor in path:
  //          (return false: means there is a circle in the path)
  //         return false

  //     if neighbor not in visited:
  //         visited.add(neighbor);
  //         if not dfs(graph, neighbor, path, order, visited):
  //              (return false: means when found a circle, just stop the recursion)
  //             return false
  // path.remove(vertex)
  // order.append(path.pop())
  // return true;
};

const top_sor=(graph)=>{
  // let visit = set();
  // let path =[];
  // let order =[];
  // for vertex in graph:
  //     if vertex not in visited:
  //         visited.add(vertex);
  //         dfs(graph, vertex, path, order, visited)

  // return order[::-1]
};

const main=(n, prerequisites)=>{
  // build the graph to use dfs logic
  // graph = [[] for i in range(n)]
  // for pre in prerequisites:
  //     graph[pre[1]].append(pre[0])

  // visited = set()
  // path = set()
  // order = []
  // for course in range(n):
  //     if course not in visited:
  //         visited.add(course)
  //         if not dfs(graph, vertex, path, order, visited)
  //         return false
};
