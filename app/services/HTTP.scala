package services

import org.apache.http.client.methods.{CloseableHttpResponse}
import scala.io.Source
import org.apache.http.HttpHost
import org.apache.http.client.methods.HttpGet
import org.apache.http.impl.client.HttpClients
import org.apache.http.message.BasicHttpRequest

import scala.io.Source

trait HTTP {

  def GET(url: String, headers: Seq[(String, String)] = Nil): Response = {

    val client = HttpClients.createDefault()
    val request = new HttpGet(url)

    val response = client.execute(request)

    new Response(response)
  }

}

class Response(val response: CloseableHttpResponse) {
  lazy val body = Source.fromInputStream(response.getEntity.getContent).getLines().mkString("")
  lazy val responseCode = response.getStatusLine.getStatusCode
  lazy val responseMessage = response.getStatusLine.getReasonPhrase
  lazy val buildNumber = response.getHeaders("X-Build-Number").mkString.split(":")(1).trim().toInt

  def header(name: String) = response.getFirstHeader(name).getValue

  def disconnect() { response.close() }
}

}
