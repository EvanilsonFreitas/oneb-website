import {
  blogData,
  casesData,
  solutionsData,
  type BlogPost,
  type CaseStudy,
  type Solution,
} from '@/constants/mockData'

export const blogService = {
  async getPosts(): Promise<BlogPost[]> {
    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 300))
    return blogData
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return blogData.find((post) => post.slug === slug) || null
  },

  async getRelatedPosts(
    currentSlug: string,
    category: string,
    limit = 2,
  ): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return blogData
      .filter((post) => post.slug !== currentSlug && post.category === category)
      .slice(0, limit)
  },

  async getCases(): Promise<CaseStudy[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return casesData
  },

  async getCaseBySlug(slug: string): Promise<CaseStudy | null> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return casesData.find((item) => item.slug === slug) || null
  },

  async getSolutions(): Promise<Solution[]> {
    await new Promise((resolve) => setTimeout(resolve, 150))
    return solutionsData
  },

  async getSolutionBySlug(slug: string): Promise<Solution | null> {
    await new Promise((resolve) => setTimeout(resolve, 150))
    return solutionsData.find((sol) => sol.slug === slug) || null
  },
}
